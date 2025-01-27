import React from 'react';
import { Rocket, Search, Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";


// TopBar Component
const TopBar = () => (
  <div className="border-b border-gray-200 bg-white">
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
      
      {/* Search Section */}
      <div className="flex items-center gap-2 w-full">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-8 w-full text-sm"
          />
        </div>
        <Button variant="outline" size="icon" className="shrink-0">
          <Filter className="h-4 w-4" />
        </Button>
      </div>
    </div>

    {/* Secondary Navigation */}
    <div className="border-t px-2 sm:px-4 py-2 bg-gray-50 overflow-x-auto">
      <div className="flex items-center gap-3 sm:gap-6 text-sm whitespace-nowrap min-w-max">
        <Button variant="ghost" size="sm" className="text-primary px-2 sm:px-4">All Projects</Button>
        <Button variant="ghost" size="sm" className="px-2 sm:px-4">In Development</Button>
        <Button variant="ghost" size="sm" className="px-2 sm:px-4">Live</Button>
        <Button variant="ghost" size="sm" className="px-2 sm:px-4">Archived</Button>
      </div>
    </div>
  </div>
);

export default TopBar;