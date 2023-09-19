import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';
import Footer from './components/Footer';

interface SellerSubscriptionProps {
  username?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

const content = [
  {
    id: 1,
    text: ` I hope this email finds you well. We're delighted to see
                    your interest in subscribing to our newsletter at LynkTown.
                    We're excited to keep you in the loop with the latest
                    updates, trends, and opportunities in the world of social
                    commerce.`,
  },
  {
    id: 2,
    text: `Our newsletter is designed to provide valuable insights and resources that can help you make the most of your presence on our platform. Here's what you can expect from our newsletter:`,
  },
  {
    id: 3,
    heading: '1. Industry Insights',
    text: `Stay up-to-date with the latest trends and best practices in social commerce, especially tailored for sellers like you.`,
  },
  {
    id: 4,
    heading: '2. Platform Updates',
    text: `Be the first to know about new features, tools, and improvements on our platform that can enhance your selling experience.`,
  },
  {
    id: 5,
    heading: '3. Success Stories:',
    text: `Get inspired by success stories from fellow designers who have achieved remarkable results on our platform.`,
  },
  {
    id: 6,
    heading: '4. Exclusive Offers',
    text: `Enjoy access to exclusive offers, promotions, and opportunities that can boost your business.`,
  },
];

export const SellerSubscription = ({
  username = `[Seller's Name]`,
}: SellerSubscriptionProps) => {
  return (
    <Html>
      <Head />
      <Preview>LynkTown Profile Verification</Preview>
      <Font
        fontFamily='DM Serif Display'
        fallbackFontFamily='Verdana'
        webFont={{
          url: 'https://fonts.gstatic.com/s/dmserifdisplay/v15/-nFnOHM81r4j6k0gjAW3mujVU2B2G_5x0ujy.woff2',
          format: 'woff2',
        }}
        fontWeight={400}
        fontStyle='normal'
      />
      <Font
        fontFamily='DM Sans'
        fallbackFontFamily='Verdana'
        webFont={{
          url: 'https://fonts.gstatic.com/s/dmsans/v14/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K4.woff2',
          format: 'woff2',
        }}
        fontWeight={400}
        fontStyle='normal'
      />
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                primary: '#6A5B40',
                primaryLight: '#857250',
                textPrimary: '#3B3B3B',
              },
              fontFamily: {
                dmSerif: 'DM Serif Display',
                dmSans: 'DM Sans',
              },
            },
          },
        }}
      >
        <Body className=' my-auto mx-auto font-sans'>
          <Container className='my-8 mx-auto  w-[648px]'>
            <Section className='bg-[#f3f1ee] h-[320px] flex py-8 justify-center'>
              <Img
                width={145}
                src={`https://i.ibb.co/zfhMv0C/lynktownlogo.png`}
              />
              <Container
                style={{
                  boxShadow: `0px 20px 25px -5px #0000001A`,
                }}
                className='absolute max-w-[540px] bg-white rounded--md  top-[15%] left-[50%] translate-x-[-50%]'
              >
                <Container className='h-[197px] bg-primary text-center rounded-t-md flex items-center justify-center flex-col'>
                  <svg
                    width='50'
                    height='50'
                    viewBox='0 0 60 60'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect width='60' height='60' rx='30' fill='#3AC267' />
                    <path
                      d='M13.5 30L24 40.5L45.75 18.75'
                      stroke='white'
                      strokeWidth='5'
                    />
                  </svg>
                  <Heading
                    as='h1'
                    style={{
                      fontFamily: 'DM Serif Display',
                    }}
                    className='text-white m-0 mt-1 text-4xl font-semibold'
                  >
                    You have successfully <br /> subcribed to LynkTown
                  </Heading>
                </Container>
                <Container className='py-5 px-4 rounded-b-md font-sans text-textPrimary '>
                  <Text className='text-lg font-bold'>Dear {username},</Text>
                  {content.map(item => {
                    const { id, text, heading } = item;
                    return (
                      <Text className='text-base  '>
                        {heading && (
                          <Text className='font-medium   text-base  inline'>
                            {heading}:&nbsp;
                          </Text>
                        )}{' '}
                        {text}
                      </Text>
                    );
                  })}

                  <Text className='text-base '>
                    Warm regards, <br /> Team LynkTown <br />
                    <Link href='https://www.lynktown.com'>
                      www.lynktown.com
                    </Link>
                  </Text>
                </Container>
              </Container>
            </Section>
            <Section className='bg-white h-[680px]'></Section>
            <Footer />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default SellerSubscription;
