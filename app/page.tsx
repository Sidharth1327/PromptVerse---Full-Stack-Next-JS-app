import Feed from '../components/Feed';

const Home = () => {
  return (
    <section className = "w-full flex-center flex-col">
      <h1 className = 'head_text text-center'>Discover & Share
        <br />
        <br className = "max-md:hidden"/>
        {/* means it will be hidden in large devices adn will be there in medium devices */}
        <span className = "orange_gradient text-center">AI-Powred Prompts</span>
      </h1>
      <p className='desc text-center'>Promptopia is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts</p>
      <Feed/>
    </section>
  )
}

export default Home
