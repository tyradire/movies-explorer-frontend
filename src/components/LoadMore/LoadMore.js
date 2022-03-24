import './LoadMore.css';

function LoadMore(props) {

  const clickOnBottonMore = () => {
    props.setQueue(props.queue + props.step);
  }

  return (
    <div className="load-more">
      <button onClick={clickOnBottonMore}className="load-more__button" type="button">Ещё</button>
    </div>
  );
}

export default LoadMore;