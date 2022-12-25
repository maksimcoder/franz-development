<script lang="ts">
	import { page } from '$app/stores';
  import { space } from 'svelte/internal';

	// import logo from '$lib/images/svelte-logo.svg';
	// import github from '$lib/images/github.svg';
  // $page.url.pathname

  interface IMenuItem {
    url: string,
    key: string,
    default: string,
    is_active: boolean,
    submenu: IMenuItem[]|[],
  }

  const MENU: IMenuItem[] = [
    {
      url: '/portfolio',
      key: 'portfolio',
      default: 'Portfolio',
      is_active: false,
      submenu: [],
    }, {
      url: '/services',
      key: 'services',
      default: 'Services',
      is_active: false,
      submenu: [
        {
          url: '/services/development',
          key: 'development',
          default: 'Development',
          is_active: false,
          submenu: [],
        }, {
          url: '/services/construction',
          key: 'construction',
          default: 'Construction',
          is_active: false,
          submenu: [],
        }, {
          url: '/services/architecture',
          key: 'architecture',
          default: 'Architecture',
          is_active: false,
          submenu: [],
        }, {
          url: '/services/consulting',
          key: 'consulting',
          default: 'Consulting',
          is_active: false,
          submenu: [],
        },
      ],
    }, {
      url: '/news',
      key: 'news',
      default: 'News',
      is_active: false,
      submenu: [],
    }, {
      url: '/about-us',
      key: 'about-us',
      default: 'About us',
      is_active: false,
      submenu: [],
    }, {
      url: '/contacts',
      key: 'contacts',
      default: 'Contacts',
      is_active: false,
      submenu: [],
    },
  ];

  let activeKey = "";
  let scrollY = 0;

  // Reactive
  $: menuList = getItemList($page.url.pathname, activeKey);
  $: activeMenuItem = getActiveItem(activeKey);

  /**
   * On expandable menu item click
   */
  const onExpandebleMenuItemClick = (key: string): void => {
    activeKey = (activeKey === key) ? "" : key;
  }

  /**
   * On menu item click
   */
  const onMenuItemClick = () => {
    if (activeKey !== "") {
      activeKey = "";
    }
  }

  /**
   * Close submenu
   */
  const closeSubmenu = () => {
    activeKey = "";
  }

  /**
   * Get actual menu
   */
  const getItemList = (pathname: string, $$activeKey: string): IMenuItem[] => {
    return MENU.map(el => {
      el.is_active = $$activeKey === ""
        ? pathname.indexOf(el.url) >= 0
        : el.key === $$activeKey;
      return el;
    });
  }

  /**
   * Get active menu item
   */
  const getActiveItem = ($$activeKey: string): IMenuItem|null => {
    return MENU.find(el => el.key === $$activeKey) ||null;
  }
</script>

<svelte:window bind:scrollY={scrollY}/>

<header
  class="header"
  class:header-blured={scrollY > 300}
  class:header-toggled={activeMenuItem}
>
  <div class="header-inner">
    <a href="/" class="logo">
      <img src={activeMenuItem ? `/logo-black.png` : `/logo.png`} alt="Franz Development">
    </a>

    <nav class="nav">
      <ul>
        {#each menuList as item}
          <li class:is-active={item.is_active}>
            {#if item.submenu?.length > 0}
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <span
                class="menu-link"
                on:click={() => onExpandebleMenuItemClick(item.key)}
              >
                {item.default}
              </span>
            {:else}
              <a
                href={item.url}
                class="menu-link"
                on:click={onMenuItemClick}
              >
                {item.default}
              </a>
            {/if}
          </li>
        {/each}
      </ul>
    </nav>
  </div>

  {#if activeMenuItem}
    <aside class="submenu">
      <div class="submenu-inner">
        <ul>
          {#each activeMenuItem.submenu as item }
            <li>
              <a href={item.url} on:click={onMenuItemClick}>
                {item.default}
              </a>
            </li>
          {/each}
        </ul>

        <button
          class="submenu-inner--close"
          on:click={closeSubmenu}
        >
          Close &times;
        </button>
      </div>
    </aside>
  {/if}
</header>

<style lang="scss">
  .header {
    @apply w-full;
    @apply fixed top-0 left-0 right-0 z-30;
    @apply h-[var(--header-height)];

    &.header-blured {
      &:not(.header-toggled) {
        @apply bg-black/10 backdrop-blur-sm;
        // @apply transition-all;
      }
    }

    &-inner {
      @apply flex flex-row justify-between;
      @apply w-full max-w-[var(--max-content-width)] mx-auto;
    }

    .logo {
      @apply pt-5;
    }

    .nav {
      @apply py-7;

      .menu-link {
        @apply text-white;
        @apply flex px-3 py-1;
        @apply cursor-pointer;
        @apply select-none;
      }

      li.is-active {
        > .menu-link {
          @apply bg-[#B29370];
          @apply rounded-xl;
        }
      }

      > ul {
        @apply flex flex-row;
        @apply space-x-4;

        > li {
          @apply relative;
        }
      }
    }

    &.header-toggled {
      @apply bg-white;

      .menu-link {
        @apply text-black;
      }

      li.is-active {
        > .menu-link {
          @apply text-white;
        }
      }
    }

    .submenu {
      @apply fixed inset-x-0 bottom-0 top-[var(--header-height)];
      @apply bg-white;
      @apply text-black text-4xl;
      @apply pt-12;

      &-inner {
        @apply w-full max-w-[var(--max-content-width)] mx-auto;
        @apply relative;

        &--close {
          @apply absolute;
          @apply top-0 right-0;
        }

        ul {
          @apply space-y-12;
          @apply flex flex-col;

          li {

            a {
              @apply inline-block;
              @apply transition-all;
              &:hover {
                @apply text-[var(--color-brown-100)];
              }
            }
          }
        }
      }
    }
  }
</style>
