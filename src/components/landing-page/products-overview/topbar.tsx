import React from 'react';
import { 
  Rocket, 
  Users, 
  Bell,
  Search,
  Filter,
  Grid,
  List,
  Settings,
  HelpCircle
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const TopBar = () => {
  return (
    <div className="border-b border-gray-200 bg-white">
      {/* Main TopBar Container */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Rocket className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">C4E Labs Projects</span>
            </div>
            <Badge variant="secondary" className="ml-2">12 Active</Badge>
          </div>

          {/* Center Section - Search */}
          <div className="hidden md:flex items-center gap-2 max-w-md w-full mx-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search projects..." 
                className="pl-8"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>

         
        </div>
      </div>

      {/* Secondary Navigation (Optional) */}
      <div className="border-t px-4 py-2 bg-gray-50">
        <div className="flex items-center gap-6 text-sm">
          <Button variant="ghost" size="sm" className="text-primary">All Projects</Button>
          <Button variant="ghost" size="sm">In Development</Button>
          <Button variant="ghost" size="sm">Live</Button>
          <Button variant="ghost" size="sm">Archived</Button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;