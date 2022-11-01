import React from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'

const DetailsPage = () => {
  return (
    <MeetupDetail
      image="https://media.cntraveler.com/photos/5d8cf7d5db6acf000833e6cc/master/pass/Eiffel-Tower_GettyImages-1060266626.jpg"
      title="First Meetup"
      address="Paris"
      description="This is a first meetup"
    />
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId

  console.log(meetupId)

  return {
    props: {
      meetupData: {
        image:
          'https://media.cntraveler.com/photos/5d8cf7d5db6acf000833e6cc/master/pass/Eiffel-Tower_GettyImages-1060266626.jpg',
        id: meetupId,
        title: 'First Meetup',
        address: 'Paris',
        description: 'This is a first meetup',
      },
    },
  }
}

export default DetailsPage
