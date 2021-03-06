import { registerPlugin } from '@capacitor/core';

export interface FreshChatPlugin {
  init(): Promise<{ value: object }>;

  setUser(options: object): Promise<{ value: object }>;

  getUser(): Promise<{ value: object }>;

  showConversations(): Promise<{ value: object }>;
}

const freshChat = registerPlugin<FreshChatPlugin>('FreshChat');

export default freshChat;
