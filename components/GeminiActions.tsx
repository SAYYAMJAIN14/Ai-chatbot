
import React, { useState } from 'react';
import { Message as MessageType } from '../types';
import { generateSmartReplies, summarizeConversation } from '../services/geminiService';
import Icon from './Icon';

interface GeminiActionsProps {
  messages: MessageType[];
  onSelectReply: (replyText: string) => void;
}

const GeminiActions: React.FC<GeminiActionsProps> = ({ messages, onSelectReply }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const [smartReplies, setSmartReplies] = useState<string[]>([]);

  const handleSummarize = async () => {
    setIsLoading(true);
    setSummary(null);
    setSmartReplies([]);
    const result = await summarizeConversation(messages);
    setSummary(result);
    setIsLoading(false);
  };

  const handleSmartReply = async () => {
    setIsLoading(true);
    setSummary(null);
    setSmartReplies([]);
    const replies = await generateSmartReplies(messages);
    setSmartReplies(replies);
    setIsLoading(false);
  };

  return (
    <div className="px-4 py-2 border-t border-gray-700 bg-gray-800">
      <div className="flex items-center space-x-2">
        <span className="text-xs font-semibold text-indigo-400">AI Actions:</span>
        <button
          onClick={handleSummarize}
          disabled={isLoading}
          className="flex items-center px-2 py-1 text-xs bg-gray-700 hover:bg-gray-600 rounded-lg disabled:opacity-50"
        >
          <Icon name="summarize" className="w-4 h-4 mr-1" /> Summarize
        </button>
        <button
          onClick={handleSmartReply}
          disabled={isLoading}
          className="flex items-center px-2 py-1 text-xs bg-gray-700 hover:bg-gray-600 rounded-lg disabled:opacity-50"
        >
          <Icon name="reply" className="w-4 h-4 mr-1" /> Smart Reply
        </button>
      </div>
      {isLoading && <div className="text-center text-xs text-gray-400 py-2">Generating...</div>}
      {summary && (
        <div className="mt-2 p-2 bg-gray-700 rounded-lg">
          <p className="text-sm font-bold">Summary:</p>
          <p className="text-xs text-gray-300">{summary}</p>
        </div>
      )}
      {smartReplies.length > 0 && (
        <div className="mt-2">
          <p className="text-sm font-bold mb-1">Suggestions:</p>
          <div className="flex flex-wrap gap-2">
            {smartReplies.map((reply, index) => (
              <button
                key={index}
                onClick={() => onSelectReply(reply)}
                className="px-3 py-1 text-xs bg-indigo-600 hover:bg-indigo-500 rounded-full"
              >
                {reply}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiActions;
