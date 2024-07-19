document.addEventListener('DOMContentLoaded', () => {
    const terminal = document.getElementById('terminal');
    const inputLine = document.getElementById('input-line');
    const input = document.getElementById('input');
    const content = document.getElementById('content');
    const chat = document.getElementById('chat');
    const chatContent = document.getElementById('chat-content');
    const chatInput = document.getElementById('chat-input');

    function appendContent(text) {
        content.innerHTML += text + '\n';
        terminal.scrollTop = terminal.scrollHeight;
    }

    function runNeofetch() {
        const asciiArt = `
#      ____  ___    __  ________ ___________    __________  __  _______                
#     / __ \/   |  /  |/  / ___// ____/ ___/   / ____/ __ \/ / / /__  /                
#    / /_/ / /| | / /|_/ /\__ \/ __/  \__ \   / /   / /_/ / / / /  / /                 
#   / _, _/ ___ |/ /  / /___/ / /___ ___/ /  / /___/ _, _/ /_/ /  / /__                
#  /_/ |_/_/  |_/_/  /_//____/_____//____/   \____/_/ |_|\____/  /____/                
#                                                                                      
#      __________   ____  ____  ____  ______________________ ________  _   _____    __ 
#     /  _/_  __/  / __ \/ __ \/ __ \/ ____/ ____/ ___/ ___//  _/ __ \/ | / /   |  / / 
#     / /  / /    / /_/ / /_/ / / / / /_  / __/  \__ \\__ \ / // / / /  |/ / /| | / /  
#   _/ /  / /    / ____/ _, _/ /_/ / __/ / /___ ___/ /__/ // // /_/ / /|  / ___ |/ /___
#  /___/ /_/    /_/   /_/ |_|\____/_/   /_____//____/____/___/\____/_/ |_/_/  |_/_____/
#                                                                                                                          
        `;
        const profile = `
        I am a dedicated lifetime learner with a strong passion for technology.
        My work ethic drives me to continuously seek new challenges and opportunities for growth.
        With a bias for action and a deep dive mentality, I consistently strive to improve and innovate in my field.
        `;
        const tagline = 'Experienced IT Engineer | Cloud | Security | DevOps';
        appendContent(asciiArt);
        appendContent(profile);
        appendContent(tagline);
    }

    runNeofetch();

    input.focus();
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const command = input.innerText.trim();
            handleCommand(command);
            input.innerText = '';
        }
    });

    function handleCommand(command) {
        switch (command) {
            case 'help':
                appendContent('Available commands: help, about, skills, projects, ');
                break;
            case 'about':
                appendContent('Ramses Cruz: Passionate IT Engineer with experience in...');
                break;
            case 'experience':
                appendContent('Experience: IT Engineer, System Administrator, Support Specialist, Support Techincian, yada yada yada...');
                break;
            case 'skills':
                appendContent('Projects: Neofetch Resume, Cloud Automation, Security Tools...');
                break;
            case 'education':
                appendContent('Projects: Neofetch Resume, Cloud Automation, Security Tools...');
                break;
            case 'projects':
                appendContent('Projects: Neofetch Resume, Cloud Automation, Security Tools...');
                break;
            case 'contacts':
                appendContent('Projects: Neofetch Resume, Cloud Automation, Security Tools...');
                break;
            case 'ramses':
                startChat();
                break;
            default:
                appendContent(`Command not found: ${command}`);
        }
    }

    function startChat() {
        chat.classList.remove('hidden');
        appendChatContent('r@ms3s: Hi there! I am r@ms3s, how may I assist you today?');
        chatInput.focus();
    }

    function appendChatContent(text) {
        chatContent.innerHTML += text + '\n';
        chatContent.scrollTop = chatContent.scrollHeight;
    }

    chatInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const userMessage = chatInput.value.trim();
            if (userMessage) {
                appendChatContent(`You: ${userMessage}`);
                handleChatResponse(userMessage);
                chatInput.value = '';
            }
        }
    });

    function handleChatResponse(message) {
        let response = '';
        switch (message.toLowerCase()) {
            case 'tell me about your projects':
                response = 'r@ms3s: I have worked on various exciting projects including...';
                break;
            case 'show me your resume':
                response = 'r@ms3s: Sure! You can download my resume [here](link_to_resume).';
                break;
            case 'contact':
                response = 'r@ms3s: Feel free to contact me through [this form](link_to_contact_form).';
                break;
            case 'job openings':
                response = 'r@ms3s: If you know of any job openings that might suit me, please share the link or contact information of the hiring manager [here](link_to_form_or_email).';
                break;
            default:
                response = 'r@ms3s: Sorry, I didn\'t understand that. Try asking about projects, resume, contact, or job openings.';
        }
        appendChatContent(response);
    }
});

