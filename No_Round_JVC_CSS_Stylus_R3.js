// ==UserScript==
// @name         UI_2023_JVC_JS
// @namespace    UI_2023_JVC_JS
// @version      8.5.9
// @description  Enleve les border radius abusifs de la mise à jour à jour décembre 2023 (JVC). (JS).
// @author       Atlantis
// @match        *://www.jeuxvideo.com/*
// @grant        none
// @icon         https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/128px/1f7e7.png
// @license      CC0-1.0
// @run-at       document-start
// ==/UserScript==

/* SKIN CSS : https://userstyles.world/style/17542/ */

const style = document.createElement("style");
style.textContent = `

    /* CODE */

    /* Buttons */
    .buttonsNavbar__button,
    .surveyResults__toggleButton,
    .btn {
        border-radius: 5.5px;
    }

    .buttonsNavbar {
        box-shadow: none;
        backdrop-filter: none;
        border-radius: 0;
        border: 0;
        background: none;
        border-bottom: 0.1rem solid var(--jv-border-color);
        max-height: 55px;
        padding-bottom : 15px;
    }

    @media (max-width: 611px) {
        .buttonsNavbar--search .buttonsNavbar__button:nth-of-type(2)::after {
            content : 'Rechercher';
            font-weight: 700;
        }

        .buttonsNavbar__space {
            visibility: hidden;
        }
    }

    .dropdownCustom__list,
    #mp .dropdown-menu {
        border-radius : 0.4rem;
    }

    .topicResolve,
    .userParameters {
        border-radius: 0.4rem;
    }

    .link-plus-de-comm {
        border-radius: 0.3rem !important;
    }

    .valider-modif-profil {
        border-radius: 0.3rem;
    }

    #js-list-message-tools-actions,
    #js-list-topics-tools-actions {
        position: static;
        order: 0 !important;
        margin-bottom: 15px;
    }

    .container__pagination {
        margin-bottom: 15px;
    }

    .container__post > .container__postTitle {
        display : none;
    }

    .toast,
    .alert {
        border-radius: 0.3rem !important;
    }

    .headerAccount__dropdownContainer {
        border-radius: 0.4rem !important;
    }

    .header__navList--lvl2 {
        border-radius: 0.5rem;
    }


    .quickAccessButton {
        border-radius: 5.5px !important;
    }

    .card-img-top {
        border-radius: 0.4rem !important;
    }

    .form-select,
    .form-control,
    .report__select,
    .listActions__textarea,
    .report__textarea {
        border-radius: 0.4rem;
    }

    .modalWrapper__main {
        border-radius: 5px;
    }

    .imageUploadEditor__preview {
        border-radius: 0.2rem;
    }

    .pagination__navigation {
        gap: 0.325rem 0.625rem;
    }

    .pagination__button:not(.pagination__button--light):not(.pagination__button--current) {
        border: 0;
        background: none !important;
        color: var(--jv-link-color);
    }
    .pagination__button:not(.pagination__button--light):not(.pagination__button--current):hover {
        color: var(--jv-text-hover-secondary);
    }


    #forums-info-app .sideCardForum__listItemAvatar {
        display: none;
    }

    .titleMessagesUsers__title {
        font-size: 1.6rem;
    }

    /* Forums */
    .survey__removeSurvey,
    .survey__addSurvey {
        color : var(--jv-blue-gray-color)
    }

    .survey__icon,
    .postMessage__loader,
    .postMessage__icon,
    /*PUB*/
    .js-layout-adHeader,
    .layout__videoFooter,
    .sponsoTab__link,
    .newsletter-popin-modal,
    /* .header__navItem--lvl1:nth-child(3), */
    .ads.anchorWrapper.js-tracking-widget,
    .headerSearch__autocompleteItem.js-tracking-widget {
        display: none;
    }

    .gameHeaderSubNav__itemLink--active {
        border-radius: 0.4rem;
    }


    #input-topic-title ,
    .messageEditor__containerEdit {
        border-radius: 0.3rem !important;
        box-shadow: none;
        border-color: var(--jv-input-border-color) !important;
    }

    .messageEditor__containerEdit {
        display: grid;
    }

        .messageEditor__buttonEdit {
            order: -1;
            border-top: none;
            border-bottom: 0.0625rem solid var(--jv-border-color);
        }

        .messageEditor__buttonEdit {
            background-color: var(--jv-bg-color-light);
            margin: 0;
        }

        .buttonsEditor {
            margin: 0 0.625rem;
        }


    .messageUser__checkboxContainer {
        display: none;
    }

    .messageUser__footer {
        justify-content: right;
        position : absolute;
        order : -1;
        top: 5px;
        right: 15px;
        border: none;
    }

    .messageUser__footer {
        gap : 10px;
    }

    .messageUser__dateEdit {
        margin-bottom: 0.3375rem;
    }

        .messageUser__card .messageUser__actionIcon {
            opacity : 0.33;
        }

        .messageUser__footer {
            gap : 6px !important;
        }
        @media (min-width: 612px) {
             .messageUser__modalContainer > .messageUser__fills {
                 gap : 6px;
             }
        }

        .messageUser__card .messageUser__actionIcon:hover {
            opacity : 1;
        }

        .messageUser__actionIcon::before {
            content: none;
        }

        .messageUser__actionIcon {
            background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAAAQCAYAAAAVg5N2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA0NDA1MUFGNTYzMTExRTU5Q0Q4RUFCRkUxRkZGMjVCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA0NDA1MUIwNTYzMTExRTU5Q0Q4RUFCRkUxRkZGMjVCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDQ0MDUxQUQ1NjMxMTFFNTlDRDhFQUJGRTFGRkYyNUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDQ0MDUxQUU1NjMxMTFFNTlDRDhFQUJGRTFGRkYyNUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5sVxEbAAAL3ElEQVR42uxb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") 0 no-repeat;
        }
        .messageUser__actionIcon.icon-pm {
            background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsSAAALEgHS3X78AAABQUlEQVQ4y52TvYoCMRSFv/lBgoWF+AgBlSkCNkIan8Nyex9nG5/AFxmmHyEwA8mAvWgr0cFtnNkd/GH1QOAW55x7kpsbrNfrPvANLAHB/3ACNsAqvom/eA+i0YS3zp9iGb4R+2GSuKmSJEFrTV3XXK/Xh+wgCIiiiCzLMMYA0BpEUcTxeGQ4HL5seTgciONW9muw3W4xxiClJEkSRqNRR7jf7zHGYK2lrut7g/F4zG63oyxLnHNIKVFKAZDnOdZaLpcLQgiklJRl2TVYLBYAZFmGtZaiKKiqCgDvPUIIJpMJWmuAewPvPb1eD601s9mMPM8pigIApRRKKYQQLffuCp3ZCMF8Pmc6nQIwGAyePmpr8Gh0z4R/uWFTpGmK957z+fzyeO9J07ST4AQI5xzOuXd/4im8bdWn2MTAqlmMT9b5B4uWkd8VKuN+AAAAAElFTkSuQmCC") 0 no-repeat;
            background-position-x: 0rem;
        }
        .messageUser__actionIcon.icon-pm {
            background-position-x: 0rem;
        }
        .messageUser__actionIcon.icon-quotes {
            background-position-x: -1.25rem;
        }
        .messageUser__actionIcon.icon-pencil2 {
            background-position-x: -2.5rem;
        }
        .messageUser__actionIcon.icon-black-list {
            background-position-x: -3.75rem;
        }
        .messageUser__actionIcon.icon-signaler {
            background-position-x: -6.25rem;
        }
        .messageUser__actionIcon.icon-more {
            background-position-x: -7.5rem;
        }
        .messageUser__actionIcon.icon-kick {
            background-position-x: -8.75rem;
        }
        .messageUser__actionIcon.icon-trash {
            background-position-x: -10rem;
        }
        .messageUser__actionIcon.icon-kick-active {
            background-position-x: -11.25rem;
        }
        .messageUser__actionIcon.restore {
            background-position-x: -12.5rem;
        }
        .messageUser__actionIcon.icon-nuke {
            background-position-x: -13.75rem;
        }



    .tablesForum__cellAuthor .tablesForum__remainingAvatars,
    .tablesForum__cellAuthor .tablesForum__separator {
        display: none !important;
    }

    /*TEMPLATE PETIT ECRAN -- FROM RISIBANK*/
    @media (min-width: 1200px) and (max-width: 1450px) { /* Max for fellback debou*/
        .layout {
            --grid-template-columns: 1fr 49rem 24.5rem 1fr;
        }
    }

    /*TEMPLATE MOBILE*/
    @media (max-width: 611.98px) {

        .tablesForum__cellText {
            grid-column: 1;
        }

       .tablesForum__cellText::before {
           content : none;
       }

        .tablesForum--isModeCompact .tablesForum__bodyRow {
            --tables-forums-padding: 0.3125rem 1.5rem;
        }

        .tablesForum__cellLink {
            grid-column: 2;
            grid-row: 3;
            text-align: right;
        }

        .tablesForum__cellLink::before {
            content : none;
        }
    }

    .tablesForum__cellText,
    .tablesForum__cellLink,
    .tablesForum__cellAuthor {
        font-size: 14px;
    }

    .tablesForum--hotTopics .tablesForum__subjectText {
        font-weight: normal;
    }

   .tablesForum {
        border-radius: 0.3rem;
    }

    .messageEditor__containerPreview {
        background-color: inherit;
        border-radius: 0.3rem !important;
    }

    .message__urlImg {
        border-radius: 0;
        margin-bottom: 0;
    }

    .messageUser__card .messageUser__actionIcon {
        font-size: 1.2rem;
        height: 1.2rem;
        width: 1.2rem;
    }

    /* --FIX -- SPA ------*/
    .messageUser > .messageUser__groupFills {
        display : none;
    }
    /* --FIX -- END ------*/

    .messageUser__footer {
        height: 1.5rem;
    }

    .topic-list {
        border-radius: 0.3rem;
    }

    #forums-info-app + .sideCardForum {
        display : none;
    }

    .sideCardForum__listItem {
        margin-bottom: 0.25rem;
        line-height: 1.5;
    }

    .sideCardForum__listItemCount {
        border-color: 0.0625rem solid var(--jv-blue-gray-color);
        color: var(--jv-blue-gray-color);
    }

    .lockInfo,
    .bloc-message-forum,
    .messageUser__card {
        border-radius: 0.3rem;
    }
    .messageUser__card {
        border: 0.0625rem solid var(--border-color);
    }

    .messageUser .avatar {
       width: 3.4rem;
       height: 3.4rem;
       border: 0;
       padding: 0.1875rem;
    }

    .avatar--with-animation {
       box-shadow: none;
    }
    
    .messageUser__label {
        font-weight : 500;
        padding-bottom: 0.1rem;
        font-size: 0.97rem;
    }

    .messageUser__level {
        color : var(--jv-text-muted-color);
        line-height: 1.1;
    }


    .avatar--with-animation:before {
        background: var(--shadow-color);
        animation : none;
    }

    .nouveau-msg > a {
        border-radius: 0.3rem !important;
    }

    .bloc-pre-pagi-forum {
        border-radius: 0rem;
        border-top: none;
        border-left: none;
        border-right: none;
        padding-left: 0;
        padding-right: 0;
        background-color: transparent;
    }

    .btn-lancer-rech {
        border-top-right-radius: 0.3rem !important;
        border-bottom-right-radius: 0.3rem !important;
    }

    .select-search {
        border-top-left-radius: 0.3rem !important;
        border-bottom-left-radius: 0.3rem !important;
    }
    .forumSearchBar__form {
    --search-border-radius: 0.3rem 0.3rem 0 0;
    }
    @media (min-width: 612px) {
        .forumSearchBar__form {
            --search-border-radius: 0.3rem;
            box-shadow: none;
            border-color: var(--jv-input-border-color) !important;
        }
    }
    .searchBar__form {
        border-radius: 0.4rem ;
    }

    #list-topics-search-result .lockInfo__icon {
        visibility : hidden;
    }

    /* Profil */
    .fiche-abonne {
        border-radius: 0.3rem;
    }

    .wrapper-avatar img {
        border-radius: 0.3rem !important;
    }

    .label-tag {
        border-radius: 0.3rem;
    }

    .type-notif {
        border-radius: 0.3rem !important;
    }

    .bloc-default-profil {
        border-radius: 0.4rem ;
    }

    .bloc-default-profil-body {
        border-radius: 0.4rem ;
    }

    .last-messages {
        border-radius: 0.4rem !important;
    }

    .list-menu-profil {
        border-radius: 0.5rem !important;
    }

    .menu-profil .list-menu-profil .lien-profil {
        border-radius: 0.5rem;
    }

    .simpleButton {
        border-radius: 0.4rem ;
    }

    .link-rediger-article {
        border-radius: 0.5rem ;
    }

    .mon-karma-profil-general {
        border-radius: 0.4rem ;
    }

    /*
    .form-check-input:focus {
        border-color: #5cb85c;
        box-shadow: 0 0 0 .25rem rgba(92,184,92, 0.25);
    }
    .form-check-input:checked {
        background-color: #5cb85c;
        border-color: #5cb85c
    }
    */

    #blacklist li {
        border-radius : 0.4rem ;
    }

    .liste-profil-general .profile-link {
        border-radius: 0.4rem !important;
    }

    .link-articles-precedents.notif-prec {
        border-radius: 0.3rem;
    }

    /* MP */

    #mp-menus {
        border-radius: 0.4rem;
    }

    .action-bar .btn {
        border-radius: 5.5px !important;
    }

    .action-bar .btn-25-msg {
        border-radius: 0.3rem !important;
    }

    .label-default {
        border-radius: 0.2rem !important;
    }

    /* Pagination */
    .bloc-pagi-default .page-active {
        border-radius: 0.3rem;
    }

    /* //LEGACY START// */
    .bloc-pagi-default .pagi-debut-actif,
    .bloc-pagi-default .pagi-fin-actif,
    .bloc-pagi-default .pagi-precedent-actif,
    .bloc-pagi-default .pagi-suivant-actif,
    .bloc-pagi-default .pagi-debut-inactif,
    .bloc-pagi-default .pagi-fin-inactif,
    .bloc-pagi-default .pagi-precedent-inactif,
    .bloc-pagi-default .pagi-suivant-inactif {
        border-radius: 0.3rem !important;

        max-width: 36px;
        max-height: 36px;
        align-items: center;
        display: flex;
        justify-content: center;
    }
    /* //LEGACY END// */

    /* Cards */

    /*top forum*/
    .card__badge--counter {
        border-radius: 0.4rem;
    }

    /*top card inherit of parent*/
    .card > .card-header {
        border-radius: 0;
    }

    .backTo,
    .userCount__icon,
    .userCount__number {
        color: var(--jv-blue-gray-color);
    }

    .userCount__icon {
        font-size : 1.1rem;
    }

    .surveyResults__icon,
    .surveyResults__count {
        color: var(--jv-blue-gray-color);
    }

    .surveyResults__toggleButton, 
    .surveyResults__progressFill {
        background: var(--jv-blue-gray-color);
        border : none;
    }

    .sideCardForum__header {
        border-radius: 0.3rem 0.3rem 0 0;
        border: 0.0625rem solid var(--jv-border-color);
        border-bottom : none;
        background-color: var(--jv-bg-color-light);
        padding: 0.15rem 0.7rem;
    }

    .sideCardForum__body {
        border-radius: 0 0 0.3rem 0.3rem;
    }

    .card,
    .surveyResults {
        border-radius: 0.3rem !important;
    }

    .message__spoilLabel,
    .message__spoilContent {
        border-radius:0.2rem;
    }

    @media (max-width: 999px) {
        .container__main:nth-of-type(2) {
            padding: 0 0.625rem;
        }
    }

    @media (max-width: 999px) {
        .sideCardForum {
            padding: 0 0.625rem;
        }
    }

    /*homepage = card--default*/
    .card--cover .card-img,
    .card--cover .card-img-overlay,
    .card--cover .card__contentType {
        border-radius: 0.4rem !important;
    }
`;
if (document.head) document.head.append(style);
else setTimeout(() => document.head.append(style), 300);
