# React Chat App

A real-time chat application built with React, designed to display conversations between users and their contacts. This app focuses on viewing messages and managing conversations.
The React Chat App is a simple application that displays a list of contacts and their conversations. Users can view recent messages, mark conversations as unread, and manage their chat history. 

## Features

- View a list of contacts and recent messages.
- Open a conversation with a contact to view the chat history.
- Mark conversations as unread.
- Delete conversations.

## Components

### 1. Contact List

The Contact List component displays all the user's contacts along with their most recent message. Key functionalities include:

- **Displaying Recent Messages**: The latest message in each conversation is shown under the contact's name.
- **Modal Options**: Clicking on the three dots next to a contact opens a modal with options to:
  - Mark the conversation as unread.
  - Delete the conversation.
  - Close the modal (Cancel).
- **Unread Message Indicator**: If a conversation has unread messages, an indicator will appear. 

### 2. Conversation

The Conversation component focuses on displaying the chat history between the user and the selected contact. Key functionalities include:

- **Displaying Chat History**: When a contact is selected, the full conversation is displayed.
- **Navigating to Conversations**: Clicking on a contact in the Contact List takes the user to the Conversation screen for that contact.

**Note:** The following features are not included in this app:
- Typing and sending messages.
- Attaching files.
- Redirecting to contact details when clicking on the contact name/photo.
- Video/voice calls.

## Prerequisites

Ensure you have the following installed on your development environment:

- **Node.js**: Available at [Node.js Official Website](https://nodejs.org/).
- **npm**: Node package manager.
  npm install 

**Clone the repository:**
git clone https://github.com/Sania-Akhtar-SA/chat-app.git

**Navigate to the project directory:**
cd react-chat-app

**Install dependencies:**
npm install

**To start the development server and run the application:**
npm run dev
