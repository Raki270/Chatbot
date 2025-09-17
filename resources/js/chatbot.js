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
        msgWrapper.innerHTML = `
            <div class="bg-[#505B8D] text-white font-bold px-4 py-2 rounded-tl-full rounded-bl-full rounded-br-full rounded-tr-none max-w-[70%]">
                ${text}
            </div>
        `;
    } else if (sender === "ai") {
        msgWrapper.className = "flex justify-start";
        msgWrapper.innerHTML = `
            <img src="https://ik.imagekit.io/r3656r3r/Group77.png?updatedAt=1757435968221" 
                 alt="" class="w-6 h-6 mt-2 mr-2"/>
            <div class="text-gray-300 leading-relaxed max-w-[80%] mt-2">
                ${text}
            </div>
        `;
    } else if (sender === "spinner") {
        msgWrapper.className = "flex justify-start ai-spinner";
        msgWrapper.innerHTML = `
            <img src="https://ik.imagekit.io/r3656r3r/Group77.png?updatedAt=1757435968221" 
                 alt="" class="w-6 h-6 mt-2 mr-2"/>
            <div class="mt-2 flex items-center">
                <div class="w-5 h-5 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                <span class="ml-2 text-gray-300">AI is thinking...</span>
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
        // Append AI response
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

// Fetch AI response
async function fetchAiResponse(input) {
    const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
            method: "POST",
            headers: {
                Authorization: "Bearer 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",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "deepseek/deepseek-r1:free",
                messages: [
                    {
                        role: "user",
                        content: input,
                    },
                ],
            }),
        }
    );

    const data = await response.json();
    return data.choices[0].message.content;
}
