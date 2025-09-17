let input = document.getElementById("message");
let send = document.getElementById("send");
let response = document.getElementById("responses");
let sourcesButton = document.getElementById("sourcesButton");
let sourcesButtonClose = document.getElementById("closeSources");

function appendMessage(text, sender) {
    let msgWrapper = document.createElement("div");

    if (sender === "user") {
        msgWrapper.className = "flex justify-end";
        msgWrapper.innerHTML = `
            <div class="bg-[#505B8D] text-white font-bold px-4 py-2 rounded-tl-full rounded-bl-full rounded-br-full rounded-tr-none max-w-[70%]">
            ${text}
            </div>
        `;
    } else {
        msgWrapper.className = "flex justify-start";
        msgWrapper.innerHTML = `
            <img src="https://ik.imagekit.io/r3656r3r/Group77.png?updatedAt=1757435968221" alt="" style="width: 24px; height: 24px; margin-top: 10px; margin-right: 10px;"/>
            <div class="text-gray-300 leading-relaxed max-w-[80%]" style="margin-top: 10px;">
                ${text}
            </div>
        `;
    }

    response.appendChild(msgWrapper);
    response.scrollTop = response.scrollHeight;
}

function sendText(message) {
    if (!message.trim()) return;

    // Hide greeting if visible
    let greeting = document.getElementById("greeting");
    if (greeting) greeting.style.display = "none";
    response.style.display = "block";

    // User message
    appendMessage(message, "user");
    input.value = "";

    fetchAiResponse(message).then((response) => {
        appendMessage(response, "ai");
    });
}

//Sources apppear
sourcesButton.addEventListener("click", function() {
    let sources = document.getElementById("sources");
    sources.style.transition = "opacity 0.5s ease-in-out";
    sources.style.opacity = "1";
    sources.style.display = "flex";
    sources.style.transitionTimingFunction = "cubic-bezier(0.4, 0, 0.2, 1)";
});

//Sources dissapear
sourcesButtonClose.addEventListener("click", function() {
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

async function fetchAiResponse(input) {
    const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
            method: "POST",
            headers: {
                Authorization:
                    "Bearer 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",
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
