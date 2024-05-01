// Import necessary modules
import React, { useState, useEffect } from 'react';
import { GiftedChat, InputToolbar, Composer, Send, MessageText } from 'react-native-gifted-chat';
import { View, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";

const Chat = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false); // Track typing indicator

  useEffect(() => {
    loadWelcomeMessage();
  }, []);

  const loadWelcomeMessage = () => {
    const initialMessage = {
      _id: 0,
      text: "Hi! I'm Steve.choose one of the options below or write a message to reach our staff!",
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "Assistant",
        avatar: 'https://i.pravatar.cc/300?img=4'
      },
      quickReplies: {
        type: 'radio',
        keepIt: false,
        values: [
          { title: 'Inquiry About Prices', value: 'pricing' },
          { title: 'Locate Parking', value: 'find a parking spot' },
          { title: 'Safety and Security Info', value: 'privacy, safety and security' },
          { title: 'Request Support', value: 'support' },
          { title: 'Connect with a Representative', value: 'agent' }
        ],
      },
    };
    setMessages([initialMessage]);
  };

  const goToHome = () => {
    navigation.navigate('HomePage');
  };

  const handleQuickReply = (replies) => {
    replies.forEach(reply => {
      if (reply.value === 'agent') {
        requestChatAssignment();
      } else {
        fetchResponse(reply.value);
      }
    });
  };

  // mock database with responses
  const mockDatabase = {
    "pricing": "Our prices vary depending on location and time. For details, please check our website or contact support.",
    "find a parking spot": "You can find parking spots using our app's GPS feature. Alternatively, visit our website for a list of available spots.",
    "privacy, safety and security": "We take privacy and security seriously. All data is encrypted, and our facilities are monitored 24/7.",
    "support": "For further assistance, please contact our support team at support@company.com.",
  };

  const fetchResponse = (query) => {
    setIsTyping(true); // Enable typing indicator
    setTimeout(() => {
      const responseText = mockDatabase[query] || "I'm sorry, I don't have information on that topic at the moment.";
      const followUpMessage = { 
        _id: Math.random().toString(36).substring(7),
        text: responseText,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Assistant",
          avatar: 'https://i.pravatar.cc/300?img=5'
        }
      };
      setIsTyping(false); // Disable typing indicator after response is loaded
      setMessages(previousMessages => GiftedChat.append(previousMessages, [followUpMessage]));
    }, 2000); // Simulate response time delay
  };

  const requestChatAssignment = async () => {
    setIsTyping(true); // Enable typing indicator
    try {
      const res = await axios.post('http://192.168.0.178:3000/new-chat');
      const newMessage = {
        _id: Math.random().toString(36).substring(7),
        text: `A representative will join you shortly. You have been connected to team member ${res.data.member} who is ready to assist you.`,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Support Team",
          avatar: 'https://i.pravatar.cc/300?img=2'
        }
      };
      setIsTyping(false); // Disable typing indicator after response is loaded
      setMessages(previousMessages => GiftedChat.append(previousMessages, [newMessage]));
      console.log(`Chat assigned to team member ${res.data.member} with ${res.data.activeChats} active chats.`);
    } catch (error) {
      console.error('Failed to assign chat:', error);
      setIsTyping(false); // Disable typing indicator in case of error
    }
  };

  const onSend = (newMessages) => {
    // Append new messages to the chat
    setMessages(GiftedChat.append(messages, newMessages));

    // let the cusstomer know that a support team member will join in soon
    const warmMessage = {
      _id: Math.random().toString(36).substring(7),
      text: "Thank you for reaching out. A member of support will join in and assist you soon.",
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "Assistant",
        avatar: 'https://i.pravatar.cc/300?img=4'
      }
    };
    setMessages(previousMessages => GiftedChat.append(previousMessages, [warmMessage]));

    // fetch further responses
    setTimeout(() => requestChatAssignment(), 2000); //delay for 2seconds before assigning support
  };

  const renderMessageText = (props) => (
    <MessageText
      {...props}
      textStyle={{
        left: { color: '#540F6D' },
        right: { color: '#ffffff' }
      }}
    />
  );

  const renderInputToolbar = (props) => (
    <InputToolbar
      {...props}
      containerStyle={{
        borderWidth: 1,
        borderColor: '#e2e2e2',
        padding: 2,
        backgroundColor: '#E4E8EE',
        borderRadius: 20,
      }}
    />
  );

  const renderComposer = (props) => (
    <Composer
      {...props}
      textInputStyle={{
        color: '#082651',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingTop: 8,
        marginRight: 10
      }}
    />
  );

  const renderSend = (props) => (
    <Send {...props}>
      <View style={{ marginRight: 10, marginBottom: 5 }}>
        <Ionicons name="send" size={30} color="#1F56A6" />
      </View>
    </Send>
  );

  return (
    <View style={{ flex: 1, padding: 5, margin: 5, color: '#f3f3f3' }}>
      <View style={{ padding: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#DEE7F4', color: '#f3f3f3' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', height: 50, width: 50, borderRadius: 50 }}>
          <Image source={require('../assets/icon.png')} style={{ width: '100%', height: '100%', borderRadius: 50 }} />
        </View>

        <TouchableOpacity onPress={goToHome}>
          <Ionicons name="close-circle" size={46} color="#1F56A6" />
        </TouchableOpacity>
      </View>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        onQuickReply={handleQuickReply}
        isTyping={isTyping} // Enable typing indicator
        renderInputToolbar={renderInputToolbar}
        renderComposer={renderComposer}
        renderMessageText={renderMessageText}
        renderSend={renderSend}
        user={{ _id: 1, name: "User", avatar: 'https://i.pravatar.cc/300' }}
      />
    </View>
  );
}

export default Chat;
