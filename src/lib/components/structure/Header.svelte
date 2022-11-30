<script>
	import { page } from '$app/stores';
	// import logo from '$lib/images/svelte-logo.svg';
	// import github from '$lib/images/github.svg';
  // $page.url.pathname

  const MENU = [
    {
      url: '/portfolio',
      key: '',
      default: 'Portfolio',
    }, {
      url: '/services',
      key: '',
      default: 'Services',
    }, {
      url: '/news',
      key: '',
      default: 'News',
    }, {
      url: '/about-us',
      key: '',
      default: 'About us',
    }, {
      url: '/contacts',
      key: '',
      default: 'Contacts',
    },
  ];

  let scrollY = 0;
</script>

<svelte:window bind:scrollY={scrollY}/>

<header class="header" class:header-blured={scrollY > 300}>
  <div class="header-inner">
    <a href="/" class="logo">
      <img src="/logo.png" >
    </a>

    <nav class="nav">
      <ul>
        {#each MENU as item}
          <li class:is-active={$page.url.pathname === item.url}>
            <a href={item.url}>
              {item.default}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>

<style lang="scss">
  .header {
    @apply w-full;
    @apply fixed top-0 left-0 right-0 z-30;
    @apply transition-all;

    &.header-blured {
      @apply bg-black/10 backdrop-blur-sm;
    }

    &-inner {
      @apply flex flex-row justify-between;
      @apply w-full max-w-[1368px] mx-auto;
    }

    .logo {
      @apply pt-5;
    }

    .nav {
      @apply py-7;
      ul {
        @apply flex flex-row;
        @apply space-x-4;

        li {

          a {
            @apply text-white;
            @apply flex px-3 py-1;
          }

          &.is-active {
            a {
              @apply bg-[#B29370];
              @apply rounded-xl;
            }
          }
        }
      }
    }
  }
</style>
