

"use client";
import React, { use } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import PricingCards from '@/components/pricing-templete/pricing';
import Signinform from '@/components/signinform-templete/signin';
import Signupform  from '@/components/signupform-templete/signup';

const page = () => {
  return (
<>
<PricingCards/>
<Signinform/>
<Signupform/>
</>



  )
}

export default page
