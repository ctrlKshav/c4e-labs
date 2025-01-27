import React from 'react';
import { Rocket, Search, Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";


// TopBar Component
const TopBar = () => (
  <div className="border-b border-gray-200 bg-white ">
    <div className="p-3 sm:p-4 flex flex-col space-y-3 sm:space-y-4">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 w-full">
        <div className="flex items-center gap-2">
          <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          <span className="text-base sm:text-lg font-semibold">C4E Labs Projects</span>
          <Badge variant="secondary" className="hidden sm:inline-flex">12 Active</Badge>
        </div>
        <Badge variant="secondary" className="sm:hidden self-start">12 Active</Badge>
      </div>
      
      
    </div>

  </div>
);

export default TopBar;