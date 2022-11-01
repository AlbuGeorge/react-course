import MeetupList from '../components/meetups/MeetupList'
import Layout from '../components/layout/Layout'
import { useEffect, useState } from 'react'

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://media.cntraveler.com/photos/5d8cf7d5db6acf000833e6cc/master/pass/Eiffel-Tower_GettyImages-1060266626.jpg',
    address: 'Paris',
    description: 'This is a first meetup',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://media.cntraveler.com/photos/5d8cf7d5db6acf000833e6cc/master/pass/Eiffel-Tower_GettyImages-1060266626.jpg',
    address: 'Paris',
    description: 'This is a second meetup',
  },
]

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />
}

// export async function getServerSideProps(context) {
//   const req = context.req
//   const res = context.res

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   }
// }

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  }
}

export default HomePage
