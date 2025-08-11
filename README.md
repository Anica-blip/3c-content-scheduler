# 3C Content Scheduler

A powerful content management component for the **Thread To Success** ecosystem, designed to streamline content creation, scheduling, and AI-assisted workflow management.

## 🌟 Features

- **Character Profile Management** - Support for Anica, Caelum, and Aurion personas
- **Template Integration** - Connects with the 3C Content Template Engine
- **AI-Powered Chat Interface** - Live assistance for content refinement
- **Notion Database Integration** - Automatic saving and organization
- **Smart Scheduling** - Date and time management with conflict detection
- **Dashboard Integration** - Seamless workflow with Thread Command Center
- **Responsive Design** - Works perfectly on desktop and mobile
- **Auto-Save Functionality** - Never lose your work

## 🚀 Live Demo

Visit the live application: [https://anica-blip.github.io/3c-content-scheduler/](https://anica-blip.github.io/3c-content-scheduler/)

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Integration**: Notion API, GitHub Pages
- **Design**: Modern gradient UI with responsive layouts
- **Storage**: Browser localStorage for drafts, Notion for persistence

## 📋 Prerequisites

Before using this component, ensure you have:

1. **Notion Integration Setup**
   - Create a Notion integration at [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
   - Generate an integration token
   - Create a database with the required properties

2. **Database Properties Required**
   - Title (Title field)
   - Character Profile (Select: Anica, Caelum, Aurion)
   - Template Label (Text)
   - Description/Prompt (Text)
   - Schedule Date (Date)
   - Status (Select: Draft, Scheduled, Published)
   - Created Date (Created time)

## ⚙️ Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/anica-blip/3c-content-scheduler.git
   cd 3c-content-scheduler
   ```

2. **Configure Notion Integration**
   - Open `script.js`
   - Replace `NOTION_TOKEN` with your integration token
   - Replace `NOTION_DATABASE_ID` with your database ID

3. **Deploy**
   - Push changes to GitHub
   - Enable GitHub Pages in repository settings
   - Your app will be live at `https://yourusername.github.io/3c-content-scheduler/`

## 🔧 Configuration

The main configuration is located in `script.js`:

```javascript
const CONFIG = {
    NOTION_TOKEN: 'your-notion-token-here',
    NOTION_DATABASE_ID: 'your-database-id-here',
    TEMPLATE_ENGINE_URL: 'https://anica-blip.github.io/3c-content-template-engine/',
    DASHBOARD_CHAT_URL: 'https://threadcommand.center/dashboard/chat'
};
```

## 🎯 Usage

1. **Select Character Profile** - Choose from Anica, Caelum, or Aurion
2. **Choose Template** - Select from predefined templates or create custom
3. **Write Detailed Prompt** - Provide comprehensive AI instructions
4. **Set Schedule** - Choose date and time for content publication
5. **Use AI Chat** - Get assistance and make refinements
6. **Save to Notion** - Store your content for workflow management

## 🔗 Integration Points

- **Template Engine**: [3C Content Template Engine](https://anica-blip.github.io/3c-content-template-engine/)
- **Dashboard**: [Thread Command Center](https://threadcommand.center/dashboard/admin)
- **AI Chat**: [Dashboard Chat](https://threadcommand.center/dashboard/chat)

## 🚨 Security Notes

- **Never commit API tokens** to public repositories
- Use environment variables in production
- Regenerate tokens if accidentally exposed
- Follow Notion API rate limits and best practices

## 📱 Mobile Support

Fully responsive design that works seamlessly on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🎨 Customization

The component uses a modern gradient theme that can be customized in `style.css`:
- Primary colors: `#667eea` to `#764ba2`
- Accent colors and hover effects
- Typography and spacing
- Animation timing and effects

## 🤝 Contributing

This is part of the Thread To Success ecosystem. For suggestions or improvements:
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built for the Thread To Success content creation ecosystem
- Designed to integrate with existing dashboard workflows
- AI-powered content assistance for enhanced productivity

## 📞 Support

For support and questions:
- Check the existing issues on GitHub
- Create a new issue with detailed description
- Reference related components in the Thread To Success ecosystem

---

**Part of the 3C Thread To Success Ecosystem** 🚀
