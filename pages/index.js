function Home(){
  return(
    <div className="grid place-items-center">
      <p>Hey There!</p>
      <div className="flex flex-wrap gap-6">
      <button type="button" onClick={
        (e) => {
          e.preventDefault()
          window.location.href='/api/userdata'
        }} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Get User Data API
      </button>
      <button type="button" onClick={
        (e) => {
          e.preventDefault()
          window.location.href='/api/doc_clinic_data'
        }} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Get Doctor/Clinic API
      </button>
      <button type="button" onClick={
        (e) => {
          e.preventDefault()
          window.location.href='/api/drugsdata'
        }} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Get Drug Data API
      </button>
      <button type="button" onClick={
        (e) => {
          e.preventDefault()
          window.location.href='/api/menu'
        }} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Get Menu Data API
      </button>
      <button type="button" onClick={
        (e) => {
          e.preventDefault()
          window.location.href='/api/hospdata'
        }} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Get Hospital Data API
      </button>
      <button type="button" onClick={
        (e) => {
          e.preventDefault()
          window.location.href='/api/clinicdata'
        }} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Get Clinic Data API
      </button><button type="button" onClick={
        (e) => {
          e.preventDefault()
          window.location.href='/api/labdata'
        }} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Get Lab Data API
      </button>
      </div>
    </div>
  )
}

export default Home