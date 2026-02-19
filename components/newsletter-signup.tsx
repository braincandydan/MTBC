'use client';

import { Button } from '@/components/ui/button';

export function NewsletterSignup() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3 justify-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#FF6B35] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35] focus-visible:ring-offset-2 w-full sm:w-72"
      />
      <Button
        type="submit"
        size="lg"
        className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-bold px-8"
      >
        Blast Off
      </Button>
    </form>
  );
}
