import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between">
      <div className="w-full lg:grid grid-rows-2 lg:grid-cols-2 min-h-screen">
        <div className="bg-[url('/img/garden.webp')] bg-cover bg-no-repeat bg-center transition-all delay-150 duration-300 ease-in-out flex h-screen items-center justify-center py-12">
          <div className="mx-auto grid w-[90%] lg:w-2/3 gap-6 bg-slate-50 bg-opacity-95 py-8 px-12 rounded raised">
            <div className="grid gap-2 text-center">
              <h1 className="text-lg lg:text-2xl font-semibold text-slate-700">
                For Farmers
              </h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to login as a Farmer
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{' '}
              <a href="#" className="underline">
                Sign up
              </a>
            </div>
          </div>
        </div>
        <div className="bg-muted hover:bg-white transition-all delay-150 duration-300 ease-in-out flex h-screen items-center justify-center py-12">
          <div className="mx-auto grid w-[90%] lg:w-2/3 gap-6 hover:border-2 py-4 px-6 lg:py-8 lg:px-12 rounded raised transition-all ease-in-out delay-100 duration-250">
            <div className="grid gap-2 text-center">
              <h1 className="text-lg lg:text-2xl font-semibold text-slate-700">
                For Agri-Business
              </h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to login as an Agri-Business Owner
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{' '}
              <a href="#" className="underline">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
