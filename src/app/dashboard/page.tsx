import {
  BellRing,
  Check,
  CirclePlus,
  Edit,
  Heart,
  MessageCircle,
  MoveRight,
  Send,
  Share2,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import { CgProfile } from 'react-icons/cg';
import Image from 'next/image';
import Link from 'next/link';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';

export default function Dashboard() {
  const notifications = [
    {
      title: 'Your call has been confirmed.',
      description: '1 hour ago',
    },
    {
      title: 'You have a new message!',
      description: '1 hour ago',
    },
    {
      title: 'Your subscription is expiring soon!',
      description: '2 hours ago',
    },
  ];

  return (
    <div className="container my-8 flex flex-col gap-8">
      <div>
        <div className="hidden md:flex gap-8 justify-between">
          <Card className="h-full w-1/4">
            <CardHeader>
              <CardTitle>John Doe</CardTitle>
              <CardDescription>You have 3 unread messages.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <p>Hot-culture | Entrepreneur | Livestock</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Edit className="mr-2 h-4 w-4" /> Edit profile
              </Button>
            </CardFooter>
          </Card>

          {/* Feed post */}
          <div className="h-full w-2/4 flex flex-col gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Post Content:</CardTitle>
                <CardDescription>Share your thoughts.</CardDescription>
              </CardHeader>
              <CardContent className="">
                <div className=" flex items-center">
                  <Textarea />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-500">
                  <Send className="mr-2 h-4 w-4" /> Post
                </Button>
              </CardFooter>
            </Card>

            <div className="flex flex-col gap-8">
              <Card className="">
                <CardContent className="p-4 relative">
                  <div className="absolute text-white bg-slate-400 w-[94.6%] rounded-l-md rounded-r-sm bg-opacity-50 flex items-center gap-2 text-md p-4 ">
                    <Image
                      alt="maize farm"
                      width={30}
                      height={30}
                      className="hover:cursor-pointer"
                      src={'/img/profile-circle.png'}
                    />
                    <p className="hover:cursor-pointer">John Doe</p>
                  </div>
                  <Image
                    alt="maize farm"
                    width={720}
                    height={720}
                    className="rounded h-[25rem]"
                    src={'/img/maize.jpeg'}
                  />
                </CardContent>
                <CardFooter className="flex flex-col w-full gap-2">
                  <div className="flex justify-end gap-2 w-full">
                    <i className="hover:cursor-pointer hover:shadow bg-transparent border-none">
                      <Heart className="hover:scale-125 duration-150 text-blue-500" />
                      <span className="text-xs text-slate-500">1.2K</span>
                    </i>
                    <i className="hover:cursor-pointer hover:shadow bg-transparent border-none">
                      <MessageCircle className="hover:scale-125 duration-150 text-blue-500" />
                      <span className="text-xs text-slate-500">1K</span>
                    </i>
                    <i className="hover:cursor-pointer hover:shadow bg-transparent border-none">
                      <Share2 className="hover:scale-125 duration-150 text-blue-500" />
                    </i>
                  </div>
                  <p className="text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti laudantium architecto error rem.
                  </p>
                </CardFooter>
              </Card>
              <Card className="">
                <CardContent className="p-4 relative">
                  <div className="absolute text-white bg-slate-400 w-[94.6%] rounded-l-md rounded-r-sm bg-opacity-50 flex items-center gap-2 text-md p-4 ">
                    <Image
                      alt="maize farm"
                      width={30}
                      height={30}
                      className="hover:cursor-pointer"
                      src={'/img/profile-circle.png'}
                    />
                    <p className="hover:cursor-pointer">John Doe</p>
                  </div>
                  <Image
                    alt="maize farm"
                    width={720}
                    height={720}
                    className="rounded h-[25rem]"
                    src={'/img/rice.webp'}
                  />
                </CardContent>
                <CardFooter className="flex flex-col w-full gap-2">
                  <div className="flex justify-end gap-2 w-full">
                    <i className="hover:cursor-pointer hover:shadow bg-transparent border-none">
                      <Heart className="hover:scale-125 duration-150 text-blue-500" />
                      <span className="text-xs text-slate-500">1.2K</span>
                    </i>
                    <i className="hover:cursor-pointer hover:shadow bg-transparent border-none">
                      <MessageCircle className="hover:scale-125 duration-150 text-blue-500" />
                      <span className="text-xs text-slate-500">1K</span>
                    </i>
                    <i className="hover:cursor-pointer hover:shadow bg-transparent border-none">
                      <Share2 className="hover:scale-125 duration-150 text-blue-500" />
                    </i>
                  </div>
                  <p className="text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti laudantium architecto error rem.
                  </p>
                </CardFooter>
              </Card>
              <Card className="">
                <CardContent className="p-4 relative">
                  <div className="absolute text-white bg-slate-400 w-[94.6%] rounded-l-md rounded-r-sm bg-opacity-50 flex items-center gap-2 text-md p-4 ">
                    <Image
                      alt="maize farm"
                      width={30}
                      height={30}
                      className="hover:cursor-pointer"
                      src={'/img/profile-circle.png'}
                    />
                    <p className="hover:cursor-pointer">John Doe</p>
                  </div>
                  <Image
                    alt="maize farm"
                    width={720}
                    height={720}
                    className="rounded h-[25rem]"
                    src={'/img/pesticide.webp'}
                  />
                </CardContent>
                <CardFooter className="flex flex-col w-full gap-2">
                  <div className="flex justify-end gap-2 w-full">
                    <i className="hover:cursor-pointer hover:shadow bg-transparent border-none">
                      <Heart className="hover:scale-125 duration-150 text-blue-500" />
                      <span className="text-xs text-slate-500">1.2K</span>
                    </i>
                    <i className="hover:cursor-pointer hover:shadow bg-transparent border-none">
                      <MessageCircle className="hover:scale-125 duration-150 text-blue-500" />
                      <span className="text-xs text-slate-500">1K</span>
                    </i>
                    <i className="hover:cursor-pointer hover:shadow bg-transparent border-none">
                      <Share2 className="hover:scale-125 duration-150 text-blue-500" />
                    </i>
                  </div>
                  <p className="text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti laudantium architecto error rem.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className="w-1/4 flex flex-col gap-8">
            <Card className="">
              <CardHeader>
                <CardTitle className="">Connects.</CardTitle>
                <CardDescription>
                  People you may be interested with.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Image
                    alt="maize farm"
                    width={30}
                    height={30}
                    className="hover:cursor-pointer"
                    src={'/img/profile-circle.png'}
                  />
                  <p>John Doe</p>
                  <div className="ml-4 text-blue-500 hover:cursor-pointer flex items-center gap-2">
                    <CirclePlus className="text-sm" size={18} />
                    Connect
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Image
                    alt="maize farm"
                    width={30}
                    height={30}
                    className="hover:cursor-pointer"
                    src={'/img/profile-circle.png'}
                  />
                  <p>John Doe</p>
                  <div className="ml-4 text-blue-500 hover:cursor-pointer flex items-center gap-2">
                    <CirclePlus className="text-sm" size={18} />
                    Connect
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Image
                    alt="maize farm"
                    width={30}
                    height={30}
                    className="hover:cursor-pointer"
                    src={'/img/profile-circle.png'}
                  />
                  <p>John Doe</p>
                  <div className="ml-4 text-blue-500 hover:cursor-pointer flex items-center gap-2">
                    <CirclePlus className="text-sm" size={18} />
                    Connect
                  </div>
                </div>
              </CardContent>
              <CardFooter className="text-blue-500 flex gap-2">
                <Link href="#">View more</Link>
                <MoveRight />
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="">Topics.</CardTitle>
                <CardDescription>Popular topics this week.</CardDescription>
              </CardHeader>
              <CardContent className="flex over gap-2 flex-col text-blue-500 hover:cursor-pointer">
                <i className="hover:cursor-pointer hover:text-blue-600">
                  #maize
                </i>
                <i className="hover:cursor-pointer hover:text-blue-600">
                  #tanzaniaagriculture
                </i>
                <i className="hover:cursor-pointer hover:text-blue-600">
                  #rice
                </i>
                <i className="hover:cursor-pointer hover:text-blue-600">
                  #rice
                </i>
                <i className="hover:cursor-pointer hover:text-blue-600">
                  #pests
                </i>
                <i className="hover:cursor-pointer hover:text-blue-600">
                  #business
                </i>
              </CardContent>
              <CardFooter className="text-blue-500 flex gap-2">
                <Link href="#">View more</Link>
                <MoveRight />
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
