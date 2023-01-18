<script lang="ts">
	import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { t, locale } from '$lib/translations/translations';

  import IconMenu from '$lib/icons/IconMenu.svelte';

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
    },
    {
      url: '/news',
      key: 'news',
      default: 'News',
      is_active: false,
      submenu: [],
    },
    {
      url: '/about-us',
      key: 'about_us',
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

  const specialItemList: IMenuItem[] = [{
    url: '/services/deluxe-apartaments',
    key: 'delux',
    default: 'Deluxe apartments',
    is_active: false,
    submenu: [],
  }]

  let activeKey = "";
  let scrollY = 0;
  let mobileMenu = false;

  // Reactive
  $: menuList   = getItemList($page.url.pathname, activeKey);
  $: activeMenuItem = getActiveItem(activeKey);
  $: nextLocale = getNextLocale($locale);

  // Methods
  /**
   * Get next locale
   * @param $$locale
   */
  function getNextLocale($$locale: string) {
    return $$locale === 'en' ? 'ru' : 'en';
  }

  const changeLocale = async (lang: string) => {
    const LANG = lang;
    await locale.set(lang);
    console.log("LANG", LANG)
    goto(`/change-lang?locale=${LANG}`)
  }

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
    mobileMenu = false;
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
    return MENU.find(el => el.key === $$activeKey) || null;
  }

  /**
   * On expand mobile menu
   */
  const onExpandMobileMenu = (): void => {
    if (activeMenuItem) {
      activeMenuItem = null;
    }
    else {
      mobileMenu = !mobileMenu;
    }
  }
</script>

<svelte:window bind:scrollY={scrollY}/>

<header
  class="header"
  class:header-blured={scrollY > 300}
  class:header-toggled={activeMenuItem || mobileMenu}
>
  <div class="header-inner">
    <a href="/" class="logo" on:click={onMenuItemClick}>
      <img src={activeMenuItem || mobileMenu ? `/logo-black.png` : `/logo.png`} alt="Franz Development">
    </a>

    <button
      class="mobile-menu-burger"
      on:click={() => onExpandMobileMenu()}
    >
      {#if mobileMenu}
        {#if activeMenuItem}
          <span class="text-black text-2xl">
            Back
          </span>
        {:else}
          <span class="text-black text-2xl">
            Close &times;
          </span>
        {/if}
      {:else}
        <IconMenu />
      {/if}
    </button>

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
                {$t(`common.pages.${item.key}.title`)}
              </span>
            {:else}
              <a
                href={item.url}
                class="menu-link"
                on:click={onMenuItemClick}
              >
                {$t(`common.pages.${item.key}.title`)}
              </a>
            {/if}
          </li>
        {/each}
      </ul>

      <button
        class="ml-4"
        on:click={() => { changeLocale(nextLocale) }}
      >
        {nextLocale}
      </button>
    </nav>
  </div>

  {#if activeMenuItem && !mobileMenu}
    <aside class="submenu">
      <div class="submenu-inner">
        <ul>
          {#each activeMenuItem.submenu as item }
            <li>
              <a href={item.url} on:click={onMenuItemClick}>
                {$t(`common.pages.${item.key}.title`)}
              </a>
            </li>
          {/each}
        </ul>

        <ul class="special-list">
          {#each specialItemList as item }
            <li>
              <a href={item.url} on:click={onMenuItemClick}>
                {$t(`common.pages.${item.key}.title`)}
                <span>
                  On going
                </span>
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

{#if mobileMenu}
  <aside class="mobile-menu">
    <ul>
      {#if activeMenuItem}
        {#each activeMenuItem.submenu as item }
          <li>
            <a href={item.url} on:click={onMenuItemClick}>
              {$t(`common.pages.${item.key}.title`)}
            </a>
          </li>
        {/each}
      {:else}
        {#each menuList as item }
          <li>
            {#if item.submenu?.length > 0}
              <button on:click={() => onExpandebleMenuItemClick(item.key)}>
                {$t(`common.pages.${item.key}.title`)}
              </button>
            {:else}
              <a href={item.url} on:click={onMenuItemClick}>
                {$t(`common.pages.${item.key}.title`)}
              </a>
            {/if}
          </li>
        {/each}
      {/if}

    </ul>
  </aside>
{/if}

<style lang="scss">
  .mobile-menu {
    @apply fixed inset-0 z-20;
    @apply top-[var(--header-height)];
    @apply h-[calc(100%-var(--header-height))] w-full;
    @apply bg-white;
    @apply text-black text-3xl;
    @apply py-6;
    @apply flex flex-col justify-center;

    ul {
      @apply flex flex-col;
      @apply space-y-5;
      @apply text-center;

      li {
        ul {
          @apply mt-6;

          li {
            @apply text-slate-600  text-3xl;
          }
        }
      }
    }
  }

  .header {
    @apply w-full;
    @apply fixed top-0 left-0 right-0 z-30;
    @apply h-[var(--header-height)];
    @apply px-5 lg:px-0;
    @apply transition-colors duration-500 ease-in-out;

    &.header-blured {
      &:not(.header-toggled) {
        @apply bg-black/70 backdrop-blur-md;
      }
    }

    &-inner {
      @apply flex flex-row justify-between;
      @apply w-full max-w-[var(--max-content-width)] mx-auto;
    }

    .logo {
      @apply pt-5;
    }

    .mobile-menu-burger {
      @apply my-7;
      @apply flex lg:hidden;
    }

    .nav {
      @apply py-7;
      @apply hidden lg:flex lg:flex-row;

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
        @apply grid grid-cols-3;
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

        .special-list {
          @apply text-2xl;

          li {
            a {
              @apply inline-block;
              @apply relative;

              span {
                @apply absolute left-[calc(100%+10px)] -top-1;
                @apply bg-[var(--color-brown-100)];
                @apply inline-block rounded-lg px-1.5 py-0.5;
                @apply whitespace-nowrap text-sm text-white;
              }
            }
          }
        }
      }
    }
  }
</style>
