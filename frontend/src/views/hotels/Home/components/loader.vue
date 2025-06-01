<template>
  <div class="main">
    <!-- <div class="spinner"></div> -->
    <h3>Checking</h3>
    <h3>Available Rooms…</h3>
  </div>
</template>

<style>
/* .main{
  margin: 30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
} */
.main{
  margin: 30px 0px;
  text-align: center;
}
.spinner {
   width: 56px;
   height: 56px;
   display: grid;
   border: 4.5px solid #0000;
   border-radius: 50%;
   border-right-color: #474bff;
   animation: spinner-a4dj62 1s infinite linear;
}

.spinner::before,
.spinner::after {
   content: "";
   grid-area: 1/1;
   margin: 2.2px;
   border: inherit;
   border-radius: 50%;
   animation: spinner-a4dj62 2s infinite;
}

.spinner::after {
   margin: 8.9px;
   animation-duration: 3s;
}

@keyframes spinner-a4dj62 {
   100% {
      transform: rotate(1turn);
   }
}
</style>