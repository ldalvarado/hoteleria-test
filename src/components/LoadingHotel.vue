<template>
    <div class="loading-hotel">
        <div class="custom-loader"></div>
    </div>
</template>

<style lang="scss">
    .loading-hotel{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90vh;
    }
    .custom-loader {
        width: 100px;
        height: 100px;
        display: grid;
        border:8px solid #0000;
        border-radius: 50%;
        border-color:#EDA74C #0000;
        animation: s6 2s infinite linear;
    }
    .custom-loader::before,
    .custom-loader::after {
    content:"";
        grid-area: 1/1;
        margin:4px;
        border:inherit;
        border-radius: 50%;
    }
    .custom-loader::before {
        border-color:#766DF4 #0000;
        animation:inherit;
        animation-duration: 1s;
        animation-direction: reverse;
    }
    .custom-loader::after {
        margin:16px;
    }

    @keyframes s6 {
        100%{transform: rotate(1turn)}
    }
</style>
