import { Rocket, Users, Headphones, ListTodo, Send } from 'lucide-react';

const TopBar = () => (
    <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 p-4">
      <div className="flex items-center gap-2">
        <Rocket className="h-6 w-6 text-primary" />
        <span className="text-lg font-semibold">C4E Labs Products</span>
      </div>
      <div className="flex items-center gap-4">
        <Users className="h-5 w-5" />
        <Headphones className="h-5 w-5" />
        <ListTodo className="h-5 w-5" />
        <Send className="h-5 w-5" />
      </div>
    </div>
  );

export default TopBar