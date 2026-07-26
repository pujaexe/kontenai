"use client"

import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { toast } from "sonner";
import { Rocket, AlertTriangle, CheckCircle } from "lucide-react";

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-ink pb-24">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 py-12 px-6 lg:px-24">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
          Kontenai Design System
        </h1>
        <p className="text-base text-muted max-w-2xl">
          A modern, clean, and "SaaS-y" design language. Built with Tailwind CSS, focusing on rounded corners, soft gradients, and ample whitespace.
        </p>
      </header>

      <main className="px-6 lg:px-24 py-16 space-y-24 max-w-7xl mx-auto">
        
        {/* Color Palette */}
        <section>
          <h2 className="text-2xl font-bold border-b border-slate-200 pb-2 mb-8">1. Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ColorSwatch name="Primary (p1)" hex="#6B72FF" bgClass="bg-p1" textClass="text-white" />
            <ColorSwatch name="Primary Light (p2)" hex="#9B8FFF" bgClass="bg-p2" textClass="text-ink" />
            <ColorSwatch name="Primary Lighter (p3)" hex="#C4BDFF" bgClass="bg-p3" textClass="text-ink" />
            
            <ColorSwatch name="Blue Accent" hex="#5BAEFF" bgClass="bg-blue" textClass="text-white" />
            <ColorSwatch name="Teal Accent" hex="#54E5D4" bgClass="bg-teal" textClass="text-ink" />
            <ColorSwatch name="Rose Accent" hex="#FF7EB3" bgClass="bg-rose" textClass="text-white" />
            
            <ColorSwatch name="Ink (Dark Text)" hex="#0C0B1A" bgClass="bg-ink" textClass="text-white" />
            <ColorSwatch name="Muted (Text)" hex="#7B8AAB" bgClass="bg-[#7B8AAB]" textClass="text-white" />
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-2xl font-bold border-b border-slate-200 pb-2 mb-8">2. Typography</h2>
          <div className="space-y-8 bg-white p-8 rounded-card-lg shadow-sm ring-1 ring-slate-900/5">
            <div>
              <p className="text-sm text-muted mb-1">Heading 1 - 4xl to 5xl, Bold</p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Sync your work seamlessly</h1>
            </div>
            <div>
              <p className="text-sm text-muted mb-1">Heading 2 - 2xl to 3xl, Bold</p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Understand your customers</h2>
            </div>
            <div>
              <p className="text-sm text-muted mb-1">Heading 3 - lg to xl, Semi-bold</p>
              <h3 className="text-xl font-semibold">Expense Tracking</h3>
            </div>
            <div>
              <p className="text-sm text-muted mb-1">Body Text - Base, text-muted</p>
              <p className="text-base text-muted max-w-2xl leading-relaxed">
                Effective human resources management (HRM) is essential for fostering a productive and harmonious work environment.
              </p>
            </div>
          </div>
        </section>

        {/* Elevation & Shadows */}
        <section>
          <h2 className="text-2xl font-bold border-b border-slate-200 pb-2 mb-8">3. Elevation, Shadow & Glow</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-12 bg-slate-50 rounded-[40px] border border-slate-200/60">
            {/* Elevation Sm */}
            <div className="bg-white p-6 rounded-card shadow-elevate-sm text-center">
              <div className="w-12 h-12 mx-auto bg-slate-100 rounded-full mb-4"></div>
              <h3 className="font-bold text-sm">Elevation Small</h3>
              <p className="text-xs text-muted mt-1 font-mono">shadow-elevate-sm</p>
            </div>
            {/* Elevation Md */}
            <div className="bg-white p-6 rounded-card shadow-elevate-md text-center">
              <div className="w-12 h-12 mx-auto bg-slate-100 rounded-full mb-4"></div>
              <h3 className="font-bold text-sm">Elevation Medium</h3>
              <p className="text-xs text-muted mt-1 font-mono">shadow-elevate-md</p>
            </div>
            {/* Elevation Lg */}
            <div className="bg-white p-6 rounded-card shadow-elevate-lg text-center">
              <div className="w-12 h-12 mx-auto bg-slate-100 rounded-full mb-4"></div>
              <h3 className="font-bold text-sm">Elevation Large</h3>
              <p className="text-xs text-muted mt-1 font-mono">shadow-elevate-lg</p>
            </div>

            {/* Glows */}
            <div className="bg-white p-6 rounded-card shadow-glow-p1 text-center border border-p1/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-p1/5 group-hover:bg-p1/10 transition-colors"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 mx-auto bg-p1 rounded-full mb-4 text-white flex items-center justify-center shadow-glow-p1">✨</div>
                <h3 className="font-bold text-sm text-p1">Glow Primary</h3>
                <p className="text-xs text-muted mt-1 font-mono">shadow-glow-p1</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-card shadow-glow-teal text-center border border-teal/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-teal/5 group-hover:bg-teal/10 transition-colors"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 mx-auto bg-teal rounded-full mb-4 text-ink flex items-center justify-center shadow-glow-teal">🚀</div>
                <h3 className="font-bold text-sm text-ink">Glow Teal</h3>
                <p className="text-xs text-muted mt-1 font-mono">shadow-glow-teal</p>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section>
          <h2 className="text-2xl font-bold border-b border-slate-200 pb-2 mb-8">4. Buttons & Actions (Shadcn)</h2>
          <div className="bg-white p-12 rounded-card-lg shadow-sm ring-1 ring-slate-900/5 flex flex-wrap gap-6 items-center">
            
            {/* Custom Tailwind Button from earlier */}
            <button className="px-6 py-2.5 text-sm bg-p1 text-white font-medium rounded-full hover:bg-opacity-90 transition-all shadow-md shadow-p1/20">
              Custom Primary
            </button>

            {/* Shadcn Buttons */}
            <Button>Shadcn Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            
          </div>
        </section>

        {/* Additional Shadcn Components */}
        <section>
          <h2 className="text-2xl font-bold border-b border-slate-200 pb-2 mb-8">5. Global UI Components (Shadcn)</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Input & Badge Demo */}
            <div className="space-y-8 bg-white p-8 rounded-card-lg shadow-sm ring-1 ring-slate-900/5">
              <div>
                <h3 className="text-lg font-bold mb-4">Badges</h3>
                <div className="flex gap-3">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Form Inputs & Controls</h3>
                <div className="space-y-6">
                  {/* Text Input */}
                  <div className="flex gap-2">
                    <Input type="text" placeholder="Workspace name" />
                    <Button>Save</Button>
                  </div>

                  {/* Radio Group */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-sm font-semibold text-slate-500 mb-2">Radio Options</h4>
                    <RadioGroup defaultValue="option-one">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <label htmlFor="option-one" className="text-sm font-medium leading-none cursor-pointer">Option One</label>
                      </div>
                      <div className="flex items-center space-x-2 mt-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <label htmlFor="option-two" className="text-sm font-medium leading-none cursor-pointer">Option Two</label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Select */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-sm font-semibold text-slate-500 mb-2">Select Dropdown</h4>
                    <div className="w-[280px]">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>North America</SelectLabel>
                            <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                            <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                            <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                            <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Switch */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="airplane-mode" />
                      <label htmlFor="airplane-mode" className="text-sm font-medium leading-none">Auto-publish enabled</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="airplane-mode-disabled" disabled />
                      <label htmlFor="airplane-mode-disabled" className="text-sm font-medium leading-none text-slate-400">Disabled state</label>
                    </div>
                  </div>

                  {/* Checkbox */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label htmlFor="terms" className="text-sm font-medium leading-none">Accept terms and conditions</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms-disabled" disabled />
                      <label htmlFor="terms-disabled" className="text-sm font-medium leading-none text-slate-400">Disabled state</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive & Feedback Demo */}
            <div className="space-y-8 bg-white p-8 rounded-card-lg shadow-sm ring-1 ring-slate-900/5">
              
              <div>
                <h3 className="text-lg font-bold mb-4">Avatar & Dropdown</h3>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">Open Menu</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="start">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Billing</DropdownMenuItem>
                      <DropdownMenuItem>Team</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem disabled>API Keys (Disabled)</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Alerts & Toasts</h3>
                <div className="space-y-4">
                  <Alert>
                    <Rocket />
                    <AlertTitle>Update ready</AlertTitle>
                    <AlertDescription>
                      A new version of Kontenai is available.
                    </AlertDescription>
                  </Alert>

                  <Alert variant="destructive">
                    <AlertTriangle />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      Your session has expired. Please log in again.
                    </AlertDescription>
                  </Alert>

                  <Alert variant="success">
                    <CheckCircle />
                    <AlertTitle>Success</AlertTitle>
                    <AlertDescription>
                      Your workspace has been successfully created.
                    </AlertDescription>
                  </Alert>

                  <div className="pt-2">
                    <Button 
                      variant="secondary" 
                      onClick={() => toast("Event has been created", {
                        description: "Sunday, December 03, 2023 at 9:00 AM",
                        action: { label: "Undo", onClick: () => console.log("Undo") }
                      })}
                    >
                      Show Toast Message
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Demo */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Create project</CardTitle>
                  <CardDescription>Deploy your new project in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <label className="text-sm font-semibold" htmlFor="name">Name</label>
                        <Input id="name" placeholder="Name of your project" />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Deploy</Button>
                </CardFooter>
              </Card>
            </div>
            
          </div>
        </section>

        {/* Custom Pop-ups (Screenshot based) */}
        <section>
          <h2 className="text-2xl font-bold border-b border-slate-200 pb-2 mb-8">6. Custom Pop-ups & Notifications</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 bg-slate-50 p-8 rounded-[40px] border border-slate-200/60">
            
            {/* 1. Success Card */}
            <div className="bg-white rounded-3xl p-6 shadow-elevate-lg text-center relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-emerald-400/20 rounded-full blur-[40px] pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 mx-auto bg-white shadow-sm ring-1 ring-slate-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                </div>
                <h3 className="font-bold text-base text-ink mb-2">Profile updated!</h3>
                <p className="text-[13px] text-muted leading-relaxed">Your changes have been saved successfully.</p>
              </div>
              <div className="flex gap-3 mt-8 relative z-10">
                <button className="flex-1 py-2.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-[13px] hover:bg-emerald-100 transition-colors">View Profile</button>
                <button className="flex-1 py-2.5 rounded-full bg-[#03442E] text-white font-semibold text-[13px] hover:bg-[#023322] transition-colors">Go to Dashboard</button>
              </div>
            </div>

            {/* 2. Info Card */}
            <div className="bg-white rounded-3xl p-6 shadow-elevate-lg text-center relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-blue/20 rounded-full blur-[40px] pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 mx-auto bg-white shadow-sm ring-1 ring-slate-100 rounded-full flex items-center justify-center text-blue mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <h3 className="font-bold text-base text-ink mb-2">Sync in progress...</h3>
                <p className="text-[13px] text-muted leading-relaxed">We're fetching your latest data. This may take a few moments.</p>
              </div>
              <div className="mt-8 relative z-10 w-full">
                <button className="w-full py-2.5 rounded-full bg-blue/10 text-blue font-semibold text-[13px] hover:bg-blue/20 transition-colors">View Progress</button>
              </div>
            </div>

            {/* 3. Security Card */}
            <div className="bg-white rounded-3xl p-6 shadow-elevate-lg text-center relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-purple-500/20 rounded-full blur-[40px] pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 mx-auto bg-white shadow-sm ring-1 ring-slate-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" /></svg>
                </div>
                <h3 className="font-bold text-base text-ink mb-1">Security alert</h3>
                <h4 className="font-bold text-sm text-ink mb-2">New sign-in detected</h4>
                <p className="text-[13px] text-muted leading-relaxed">We noticed a login from a new device. Was this you?</p>
              </div>
              <div className="mt-8 relative z-10 w-full">
                <button className="w-full py-2.5 rounded-full bg-[#2A0864] text-white font-semibold text-[13px] hover:bg-[#1E054A] transition-colors">Review Activity</button>
              </div>
            </div>

            {/* 4. Reward Card */}
            <div className="bg-white rounded-3xl p-6 shadow-elevate-lg text-center relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-orange-400/20 rounded-full blur-[40px] pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 mx-auto bg-white shadow-sm ring-1 ring-slate-100 rounded-full flex items-center justify-center text-orange-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect width="20" height="5" x="2" y="7"/><line x1="12" x2="12" y1="22" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
                </div>
                <h3 className="font-bold text-base text-ink mb-2">You earned a reward!</h3>
                <p className="text-[13px] text-muted leading-relaxed">Congrats! You've earned <span className="font-bold text-orange-500">250 points</span> for completing a task.</p>
              </div>
              <div className="flex gap-3 mt-8 relative z-10">
                <button className="flex-1 py-2.5 rounded-full bg-orange-50 text-orange-600 font-semibold text-[13px] hover:bg-orange-100 transition-colors">View Rewards</button>
                <button className="flex-1 py-2.5 rounded-full bg-[#F36B00] text-white font-semibold text-[13px] hover:bg-[#D95F00] transition-colors">Claim Now</button>
              </div>
            </div>

          </div>
        </section>

        {/* Data Display */}
        <section>
          <h2 className="text-2xl font-bold border-b border-slate-200 pb-2 mb-8">7. Data Display (Table & Pagination)</h2>
          
          <div className="bg-white p-2 md:p-8 rounded-[40px] shadow-sm ring-1 ring-slate-900/5 overflow-hidden">
            <h3 className="text-xl font-bold mb-8 px-4">Recent Workspaces</h3>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[120px]">ID</TableHead>
                  <TableHead>Workspace Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Members</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-semibold text-slate-700">WS-001</TableCell>
                  <TableCell className="font-medium">Design Team</TableCell>
                  <TableCell><Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200/60 rounded-full px-3 py-1 font-semibold">Active</Badge></TableCell>
                  <TableCell className="text-right font-medium">12</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold text-slate-700">WS-002</TableCell>
                  <TableCell className="font-medium">Marketing Sync</TableCell>
                  <TableCell><Badge variant="outline" className="bg-blue/10 text-blue border-blue/20 rounded-full px-3 py-1 font-semibold">In Progress</Badge></TableCell>
                  <TableCell className="text-right font-medium">8</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold text-slate-700">WS-003</TableCell>
                  <TableCell className="font-medium">Engineering</TableCell>
                  <TableCell><Badge variant="outline" className="bg-slate-50 text-slate-500 border-slate-200/60 rounded-full px-3 py-1 font-semibold">Archived</Badge></TableCell>
                  <TableCell className="text-right font-medium">24</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <div className="mt-8 border-t border-slate-100 pt-6">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </section>

        {/* Components / Cards (Manual) */}
        <section>
          <h2 className="text-2xl font-bold border-b border-slate-200 pb-2 mb-8">8. Complex UI Mocks (Manual)</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature Card Example */}
            <div className="bg-white p-8 rounded-card shadow-sm ring-1 ring-slate-900/5 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-orange-50 rounded-2xl flex items-center justify-center text-xl mb-5">
                🛍️
              </div>
              <h3 className="text-lg font-bold mb-2">Free 14-day trial</h3>
              <p className="text-sm text-muted leading-relaxed">
                Download the desktop app to start your full-featured free trial.
              </p>
            </div>

            <div className="bg-white p-8 rounded-card shadow-sm ring-1 ring-slate-900/5 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text-xl mb-5">
                💳
              </div>
              <h3 className="text-lg font-bold mb-2">No credit card required</h3>
              <p className="text-sm text-muted leading-relaxed">
                Enjoy using the app and decide if you'd like to subscribe after.
              </p>
            </div>

            {/* Dashboard snippet mock */}
            <div className="bg-gradient-to-br from-p2/20 to-rose/10 p-6 rounded-card border border-white/50 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-p1/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div>
                <span className="text-xs font-semibold text-p1 tracking-wider uppercase mb-2 block">Active Customers</span>
                <div className="space-y-3 mt-4 relative z-10">
                  {[1,2,3].map(i => (
                    <div key={i} className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-2 rounded-xl">
                      <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                      <div className="h-2 w-20 bg-slate-200 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section Mockup */}
        <section>
          <h2 className="text-2xl font-bold border-b border-slate-200 pb-2 mb-8">9. Hero / Split Layout Example</h2>
          
          <div className="bg-white rounded-[40px] overflow-hidden shadow-lg ring-1 ring-slate-900/5 relative">
            {/* Background mesh mock */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-p2/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-rose/10 rounded-full blur-3xl"></div>
            </div>

            <div className="grid md:grid-cols-2 relative z-10 p-12 lg:p-20 items-center gap-12">
              <div className="space-y-6">
                <span className="inline-block py-1 px-3 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-600 shadow-sm">
                  Tool that help you earn fast
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight leading-[1.1]">
                  Boost your organic sales in 90 days or less.
                </h2>
                <p className="text-base text-muted">
                  You can easily collaborate with team members, access your projects from anywhere, and manage your tasks.
                </p>
                <div className="pt-2">
                  <button className="px-7 py-3.5 text-sm bg-p1 text-white font-medium rounded-full hover:bg-opacity-90 transition-all shadow-lg shadow-p1/30">
                    Get 14 Days Free Trial
                  </button>
                </div>
              </div>

              {/* Fake UI mockup on the right */}
              <div className="relative h-[300px] w-full hidden md:block">
                <div className="absolute right-0 top-10 w-[80%] h-full bg-white rounded-card-lg shadow-xl ring-1 ring-slate-900/5 p-6 rotate-2 transform hover:rotate-0 transition-transform duration-500 z-10">
                  <h4 className="font-bold text-sm mb-4">Sales overview</h4>
                  <div className="h-32 bg-slate-50 rounded-xl mb-4 flex items-end justify-center pb-2 gap-2">
                    <div className="w-6 h-12 bg-p3 rounded-t-sm"></div>
                    <div className="w-6 h-20 bg-p2 rounded-t-sm"></div>
                    <div className="w-6 h-16 bg-blue rounded-t-sm"></div>
                    <div className="w-6 h-24 bg-p1 rounded-t-sm"></div>
                  </div>
                </div>
                <div className="absolute left-0 -top-4 w-[60%] bg-white rounded-card shadow-lg ring-1 ring-slate-900/5 p-4 -rotate-3 z-0 opacity-80">
                   <h4 className="font-bold text-xs mb-2 text-slate-400">Sales report</h4>
                   <div className="h-2 w-full bg-slate-100 rounded-full mb-2"></div>
                   <div className="h-2 w-3/4 bg-slate-100 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

function ColorSwatch({ name, hex, bgClass, textClass }: { name: string, hex: string, bgClass: string, textClass: string }) {
  return (
    <div className="group rounded-2xl overflow-hidden ring-1 ring-slate-900/5 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className={`h-24 w-full ${bgClass}`}></div>
      <div className="p-4">
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-xs text-muted mt-1 uppercase font-mono">{hex}</p>
      </div>
    </div>
  )
}
