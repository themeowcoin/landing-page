(()=>{

  const policyId = '918a83e56276c54fc261186446d3f5a6f3e0297e515e6409f4ca6662';
  const asset = 'asset12xn9ku7rhck7pylddj8seagu2f66v7q64ecxtt';
  const handle = '$meowcoin';

  const policyDiv = document.getElementById('policy_id');
  const assetDiv = document.getElementById('asset');
  const handleDiv = document.getElementById('handle');

  policyDiv.addEventListener('click', ()=>{
    navigator.clipboard.writeText(policyId)
    .then(()=>alert(`Se a copiado ${policyId}`))
    .catch(err=>alert(err));
  })

  assetDiv.addEventListener('click', ()=>{
    navigator.clipboard.writeText(asset)
    .then(()=>alert(`Se a copiado ${asset}`))
    .catch(err=>alert(err));
  })

  handleDiv.addEventListener('click', ()=>{
    navigator.clipboard.writeText(handle)
    .then(()=>alert(`Se a copiado ${handle}`))
    .catch(err=>alert(err));
  })






})();