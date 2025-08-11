// Configuration
const CONFIG = {
    NOTION_DATABASE_ID: '24c6ace1e83980b19d72ea19a1a114d4', // Your Content Scheduler Data database
    TEMPLATE_ENGINE_URL: 'https://anica-blip.github.io/3c-content-template-engine/',
    DASHBOARD_CHAT_URL: 'https://threadcommand.center/dashboard/chat'
};

// Template data
const TEMPLATES = {
    'news-page': {
        name: 'News Page',
        description: 'Professional news article layout with headline, byline, and article body',
        preview: 'Optimized for news content with SEO-friendly structure'
    },
    'blog-post': {
        name: 'Blog Post',
        description: 'Engaging blog post format with introduction, main content, and call-to-action',
        preview: 'Perfect for thought leadership and educational content'
    },
    'social-media': {
        name: 'Social Media',
        description: 'Short-form content optimized for social platforms',
        preview: 'Includes hashtags, mentions, and platform-specific formatting'
    },
    'newsletter': {
        name: 'Newsletter',
        description: 'Email newsletter format with sections and clear hierarchy',
        preview: 'Structured for email marketing campaigns'
    },
    'landing-page': {
        name: 'Landing Page',
        description: 'Conversion-optimized page with hero section and benefits',
        preview: 'Designed to drive specific actions from visitors'
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set default date to today
    const today = new Date();
    document.getElementById('scheduleDate').value = today.toISOString().split('T')[0];
    
    // Set default time to current time + 1 hour
    const oneHourLater = new Date(today.getTime() + 60 * 60 * 1000);
    document.getElementById('scheduleTime').value = oneHourLater.toTimeString().slice(0,5);

    // Template preview handler
    document.getElementById('templateLabel').addEventListener('change', function() {
        showTemplatePreview(this.value);
    });

    // Chat input handler
    document.getElementById('chatInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });
});

function showTemplatePreview(templateType) {
    const previewDiv = document.getElementById('templatePreview');
    
    if (templateType && TEMPLATES[templateType]) {
        const template = TEMPLATES[templateType];
        previewDiv.innerHTML = `
            <h4>${template.name}</h4>
            <p><strong>Description:</strong> ${template.description}</p>
            <p><em>${template.preview}</em></p>
            <a href="${CONFIG.TEMPLATE_ENGINE_URL}" target="_blank" class="quick-btn">View Template Engine →</a>
        `;
        previewDiv.style.display = 'block';
    } else {
        previewDiv.style.display = 'none';
    }
}

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;

    // Add user message to chat
    addChatMessage('user', message);
    input.value = '';

    // Simulate AI response (you can integrate with your actual AI chat later)
    setTimeout(() => {
        const responses = [
            "I understand. Let me help clarify that part for you.",
            "That's a great point. Would you like me to adjust the content accordingly?",
            "I can help with that modification. What specific changes would you like to make?",
            "Got it! I'll incorporate those details into the content strategy.",
            "Perfect! I'll connect this with your dashboard chat for more detailed assistance."
        ];
        const response = responses[Math.floor(Math.random() * responses.length)];
        addChatMessage('ai', response);
    }, 1000);
}

function addChatMessage(sender, message) {
    const chatContainer = document.getElementById('chatContainer');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}`;
    
    if (sender === 'user') {
        messageDiv.innerHTML = `<strong>You:</strong> ${message}`;
    } else {
        messageDiv.innerHTML = `<strong>AI Assistant:</strong> ${message}`;
    }
    
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function requestClarification() {
    const formData = getFormData();
    const clarificationRequest = `I need clarification on this content request: Character: ${formData.character}, Template: ${formData.templateLabel}, scheduled for ${formData.scheduleDate}. What specific aspects need more detail?`;
    
    addChatMessage('user', 'I need clarification on this content request');
    setTimeout(() => {
        addChatMessage('ai', 'I\'ve reviewed your content request. Could you provide more details about the target audience and the specific goals for this content? This will help me create more targeted and effective content.');
    }, 1000);
}

function rescheduleContent() {
    addChatMessage('user', 'I want to reschedule this content');
    setTimeout(() => {
        addChatMessage('ai', 'I can help you reschedule. What new date and time would work better for you? I\'ll also check for any conflicts with your existing content calendar.');
    }, 1000);
}

function repurposeContent() {
    addChatMessage('user', 'I want to repurpose this content');
    setTimeout(() => {
        addChatMessage('ai', 'Great idea! I can help repurpose this content into different formats. Would you like me to create versions for social media, email newsletter, or blog posts? Each format will be optimized for its specific platform.');
    }, 1000);
}

function reviewContent() {
    addChatMessage('user', 'Please review the changes I requested');
    setTimeout(() => {
        addChatMessage('ai', 'I\'ve reviewed your requested changes. The modifications look good and align with your content strategy. Would you like me to proceed with implementing these changes?');
    }, 1000);
}

function getFormData() {
    return {
        character: document.querySelector('input[name="character"]:checked')?.value || '',
        templateLabel: document.getElementById('templateLabel').value,
        prompt: document.getElementById('prompt').value,
        scheduleDate: document.getElementById('scheduleDate').value,
        scheduleTime: document.getElementById('scheduleTime').value,
        timestamp: new Date().toISOString()
    };
}

async function saveToNotion() {
    const formData = getFormData();
    
    // Validate required fields
    if (!formData.character || !formData.templateLabel || !formData.prompt) {
        alert('Please fill in all required fields: Character Profile, Template Label, and Prompt/Description');
        return;
    }

    try {
        // Show loading state
        const saveBtn = event.target;
        const originalText = saveBtn.textContent;
        saveBtn.textContent = 'Saving...';
        saveBtn.disabled = true;

        // Enable actual Notion API call now that we have the database ID
        const response = await fetch('https://api.notion.com/v1/pages', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${CONFIG.NOTION_TOKEN}`,
                'Content-Type': 'application/json',
                'Notion-Version': '2022-06-28'
            },
            body: JSON.stringify({
                parent: { database_id: CONFIG.NOTION_DATABASE_ID },
                properties: {
                    'Title': {
                        title: [{ text: { content: `${formData.character} - ${formData.templateLabel}` } }]
                    },
                    'Character Profile': {
                        select: { name: formData.character }
                    },
                    'Template Label': {
                        rich_text: [{ text: { content: formData.templateLabel } }]
                    },
                    'Description/Prompt': {
                        rich_text: [{ text: { content: formData.prompt } }]
                    },
                    'Schedule Date': {
                        date: { start: `${formData.scheduleDate}T${formData.scheduleTime}:00` }
                    },
                    'Status': {
                        select: { name: 'Draft' }
                    }
                }
            })
        });

        if (response.ok) {
            alert('Content saved to Notion successfully!');
            addChatMessage('ai', 'Your content has been saved to Notion successfully! You can view it in your database.');
            // Clear form after successful save
            document.getElementById('contentForm').reset();
        } else {
            const errorData = await response.json();
            console.error('Notion API Error:', errorData);
            throw new Error(`Failed to save to Notion: ${errorData.message || 'Unknown error'}`);
        }

    } catch (error) {
        console.error('Error saving to Notion:', error);
        alert('Error saving to Notion. Please check your configuration and try again.');
        addChatMessage('ai', 'There was an error saving to Notion. Please check your settings and try again.');
    } finally {
        saveBtn.textContent = originalText;
        saveBtn.disabled = false;
    }
}

// Connect to dashboard chat functionality
function connectToDashboardChat() {
    const formData = getFormData();
    const chatData = {
        source: '3C Content Scheduler',
        character: formData.character,
        template: formData.templateLabel,
        prompt: formData.prompt,
        schedule: `${formData.scheduleDate} ${formData.scheduleTime}`,
        timestamp: formData.timestamp
    };
    
    // Store data for dashboard chat integration
    localStorage.setItem('schedulerChatData', JSON.stringify(chatData));
    
    // Open dashboard chat in new tab
    window.open(`${CONFIG.DASHBOARD_CHAT_URL}?source=scheduler`, '_blank');
}

// Auto-save draft every 30 seconds
setInterval(() => {
    const formData = getFormData();
    if (formData.prompt.length > 50) {
        localStorage.setItem('contentSchedulerDraft', JSON.stringify(formData));
        console.log('Draft auto-saved');
    }
}, 30000);

// Load draft on page load
window.addEventListener('load', () => {
    const draft = localStorage.getItem('contentSchedulerDraft');
    if (draft) {
        const draftData = JSON.parse(draft);
        // You can add code here to populate form with draft data
        console.log('Draft loaded:', draftData);
    }
});
