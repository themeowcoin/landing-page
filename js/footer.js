(()=>{

  const policyId = '918a83e56276c54fc261186446d3f5a6f3e0297e515e6409f4ca6662';
  const asset = 'asset12xn9ku7rhck7pylddj8seagu2f66v7q64ecxtt';
  const handle = '$meowcoin';

  const policyDiv = document.getElementById('policy_id');
  const assetDiv = document.getElementById('asset');
  const handleDiv = document.getElementById('handle');

  policyDiv.addEventListener('click', ()=>{
    navigator.clipboard.writeText(policyId)
    .then(()=>popup())
    .catch(err=>console.log(err));
  })

  assetDiv.addEventListener('click', ()=>{
    navigator.clipboard.writeText(asset)
    .then(()=>popup())
    .catch(err=>console.log(err));
  })

  handleDiv.addEventListener('click', ()=>{
    navigator.clipboard.writeText(handle)
    .then(()=>popup())
    .catch(err=>console.log(err));
  })

  const popup = () =>{
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    setTimeout(()=>{
      popup.style.display = 'none';
    },1000)

  }






})();