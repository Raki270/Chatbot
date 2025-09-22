let input = document.getElementById("message");
let send = document.getElementById("send");
let response = document.getElementById("responses");
let sourcesButton = document.getElementById("sourcesButton");
let sourcesButtonClose = document.getElementById("closeSources");
let newChat = document.getElementById("newChatButton");

newChat.addEventListener("click", function () {
    // Smoothly fade out the response area
    response.style.transition = "opacity 0.5s ease";
    response.style.opacity = "0";

    setTimeout(() => {
        // Clear content after fade-out
        input.value = "";
        response.innerHTML = "";

        // Hide the response container
        response.style.display = "none";

        // Show the greeting with a smooth fade-in
        let greeting = document.getElementById("greeting");
        greeting.style.display = "block";
        greeting.style.opacity = "0";
        greeting.style.transition = "opacity 0.5s ease";

        // Small timeout to trigger the animation
        setTimeout(() => {
            greeting.style.opacity = "1";
        }, 50);
    }, 500); // Match the fade-out duration
});

// Function to append messages
function appendMessage(text, sender) {
    let msgWrapper = document.createElement("div");

    if (sender === "user") {
        msgWrapper.className = "flex justify-end";

        // pick bubble shape depending on text length
        const bubbleShape =
            text.length > 100
                ? "rounded-bl-2xl rounded-br-2xl rounded-tl-2xl" // for long text, softer corners
                : "rounded-bl-full rounded-br-full rounded-tl-full"; // for short text, bubble-like

        msgWrapper.innerHTML = `
        <div class="bg-[#505B8D] text-white font-bold px-4 py-2 ${bubbleShape}
            max-w-[70%] break-words leading-relaxed text-right">
            ${text}
        </div>
    `;
    } else if (sender === "ai") {
        // AI message bubble (empty at first for typing effect)
        msgWrapper.className = "flex justify-start";
        msgWrapper.innerHTML = `
            <img src="https://ik.imagekit.io/r3656r3r/Group77.png?updatedAt=1757435968221" 
                 alt="" class="w-6 h-6 mt-2 mr-2"/>
            <div id="aiMessage" class="text-gray-100 px-4 py-2 rounded-tr-full rounded-br-full 
                max-w-[70%] break-words whitespace-pre-wrap font-medium mt-2"></div>
        `;

        const aiMessageDiv = msgWrapper.querySelector("#aiMessage");

        // Typing effect
        let index = 0;
        const typingSpeed = 20; // milliseconds per character
        const typeEffect = () => {
            if (index < text.length) {
                aiMessageDiv.textContent += text.charAt(index);
                index++;
                response.scrollTop = response.scrollHeight; // Auto-scroll while typing
                setTimeout(typeEffect, typingSpeed);
            }
        };

        typeEffect();
    } else if (sender === "spinner") {
        // Spinner while AI is "thinking"
        msgWrapper.className = "flex justify-start ai-spinner";
        msgWrapper.innerHTML = `
            <img src="https://ik.imagekit.io/r3656r3r/Group77.png?updatedAt=1757435968221" 
                 alt="" class="w-6 h-6 mt-2 mr-2"/>
            <div class="mt-2 flex items-center">
                <div class="w-5 h-5 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                <span class="ml-2 text-gray-300">Размислува...</span>
            </div>
        `;
    }

    response.appendChild(msgWrapper);
    response.scrollTop = response.scrollHeight;
    return msgWrapper; // Return the message wrapper (important for removing spinner later)
}

// Function to send text
function sendText(message) {
    if (!message.trim()) return;

    // Hide greeting if visible
    let greeting = document.getElementById("greeting");
    if (greeting) greeting.style.display = "none";
    response.style.display = "block";

    // Append user message
    appendMessage(message, "user");
    input.value = "";

    // Append spinner while waiting for AI response
    const spinnerMessage = appendMessage("", "spinner");

    fetchAiResponse(message).then((aiResponse) => {
        // Remove spinner
        spinnerMessage.remove();
        // Append AI response with typing effect
        appendMessage(aiResponse, "ai");
    });
}

// Show sources
sourcesButton.addEventListener("click", function () {
    let sources = document.getElementById("sources");
    sources.style.transition = "opacity 0.5s ease-in-out";
    sources.style.opacity = "1";
    sources.style.display = "flex";
    sources.style.transitionTimingFunction = "cubic-bezier(0.4, 0, 0.2, 1)";
});

// Hide sources
sourcesButtonClose.addEventListener("click", function () {
    let sources = document.getElementById("sources");
    sources.style.transition = "opacity 0.5s ease-in-out";
    sources.style.opacity = "0";
    sources.style.display = "none";
    sources.style.transitionTimingFunction = "cubic-bezier(0.4, 0, 0.2, 1)";
});

// Send with button
send.addEventListener("click", function () {
    sendText(input.value);
});

// Send with Enter key
input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendText(input.value);
    }
});

// Fetch AI response from backend
async function fetchAiResponse(input) {
    const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            prompt: input, // matches your FastAPI ChatRequest model
        }),
    });

    const data = await response.json();
    console.log(data);
    return data.reply; // your API returns { "reply": "..." }
}
