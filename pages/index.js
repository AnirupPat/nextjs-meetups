import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetups',
    image: 'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2938&q=80',
    address: 'Duplex No: 242, Pristine Greens, BBSR, Odisha',
    description: 'This is out first meetup'
  },
  {
    id: 'm2',
    title: 'Second Meetups',
    image: 'https://images.unsplash.com/photo-1632237794118-36a67cd54ccf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80',
    address: 'Duplex No: 242, Pristine Greens, BBSR, Odisha',
    description: 'This is out second meetup'
  }
]
const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
