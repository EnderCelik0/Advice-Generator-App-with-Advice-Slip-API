import diceIcon from '../images/icon-dice.svg';
import dividerMobile from '../images/divider-mobile.svg';
import useFetch from './useFetch';

export default function AdvicePanel() {
  const {
    data: advice,
    loading,
    error,
    refetch,
  } = useFetch('https://api.adviceslip.com/advice');

  if (loading) return <q className='loading'>Loading...</q>;
  if (error) console.log(error);

  function getAdvice() {
    refetch();
  }

  return (
    <main className='advice-panel-container'>
      <h6 className='advice-number'>ADVICE #{advice?.slip.id}</h6>
      <q className='quote'>{advice?.slip.advice}</q>
      <img src={dividerMobile} className='divider'></img>
      <button onClick={refetch} className='btn-advice'>
        <img className='dice-icon' src={diceIcon}></img>
      </button>
    </main>
  );
}
