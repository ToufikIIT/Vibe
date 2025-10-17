'use client';

import { useTRPC } from '@/trpc/client'
import React from 'react'

const page = () => {
  const trpc = useTRPC();
  trpc.hello.queryOptions({text:"Hello!"})

  return (
    <div>
      
    </div>
  )
}

export default page
