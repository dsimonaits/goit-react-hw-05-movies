import useFetchCast from 'Hooks/useFetchCast';
import ActorList from 'components/ActorList/ActorList';

const Cast = () => {
  const credits = useFetchCast();

  return (
    credits && (
      <ul>
        <ActorList data={credits} />
      </ul>
    )
  );
};
export default Cast;
