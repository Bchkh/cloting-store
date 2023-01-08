import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong><i>clothing store</i></strong>
      <br/>
      <button><a href='./log'>Lets Explore -&gt;</a></button>
    </div>
  );
};

export default ExploreContainer;
