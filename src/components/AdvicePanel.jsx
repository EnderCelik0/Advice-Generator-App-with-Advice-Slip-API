import diceIcon from '../images/icon-dice.svg';
import dividerMobile from '../images/divider-mobile.svg';
export default function AdvicePanel() {
  return (
    <main className='advice-panel-container'>
      <h6 className='advice-number'>ADVICE #117</h6>
      <q className='quote'>
        It is easy to sit up and take notice, what's difficult is getting up and
        taking action.
      </q>
      <img src={dividerMobile} className="divider"></img>
      <button className='btn-advice'>
        <img className='dice-icon' src={diceIcon}></img>
      </button>
    </main>
  );
}
