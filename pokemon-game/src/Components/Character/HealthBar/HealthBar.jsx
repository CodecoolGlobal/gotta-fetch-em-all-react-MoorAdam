import "./healthBar.css";

function HealthBar({ currentHealth, maxHealth }) {
  let healthLevel = "";
  const currentHealthPercentage = (currentHealth * 100) / maxHealth;


  function changeHealthBarColorBasedOnHp() {
    currentHealthPercentage === 100 ? healthLevel = "high-health" :
      currentHealthPercentage > 65 ? healthLevel = "mid-health" :
        currentHealthPercentage > 35 ? healthLevel = "mid-low-health" :
          healthLevel = "low-health";
  }
  changeHealthBarColorBasedOnHp();

  return <div className="health-bar">
    {currentHealthPercentage === 0 ? (
      <div className="zero-health">Dead</div>
    ) : (
      <div id="current-health" className={healthLevel} style={{ width: `${currentHealthPercentage}%` }}>
        {currentHealth}hp
      </div>
    )}
  </div>
}

export default HealthBar;