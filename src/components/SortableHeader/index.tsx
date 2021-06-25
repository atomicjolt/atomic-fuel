import React, { useState, useRef, useEffect } from 'react';
import i18n from 'i18next';

import Tooltip from '../common/tooltip';
import withLiveMessenger from '../common/with_live_messanger';

import { getID } from './utils';
import './styles.scss';

const ID = getID();
const eatClick = (e: any) => {
  e.preventDefault();
  e.stopPropagation();

  return false;
};

export enum Filter {
  createdAt = 'CREATED_AT',
  dueAt = 'DUE_AT',
  name = 'NAME',
  completed = 'COMPLETED',
}

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export interface Props {
  children: React.ReactNode,
  rowSpan: number,
  onSort: Function,
  sortPath: string,
  ariaName: string,
  currentPath: string,
  currentDirection: SortDirection,
  tooltip: React.ReactNode,
  searchable: boolean,
  searchTitle: string,
  onSearch: Function,
  searchTerm: string,
  searchResultCount: number,
  announceAssertive: Function,
  initializing: boolean,
}

function SortableHeader(props: Props) {
  const [searchExpanded, setSearchExpanded] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const {
    children,
    rowSpan,
    onSort,
    sortPath,
    ariaName,
    currentPath,
    currentDirection,
    tooltip,
    searchable = false,
    searchTitle = '',
    onSearch = () => {},
    searchTerm = '',
    searchResultCount = 0,
    initializing,
  } = props;

  useEffect(() => {
    if (searchExpanded) {
      searchInputRef.current?.focus();
    } else {
      onSearch('');
    }
  }, [searchExpanded]);

  function search() {

    if (!searchable) {
      return null;
    }

    return (
      <div
        id={`container-${ID}`}
        className={`aj-input aj-input--search${searchExpanded ? ' is-expanded' : ''}`}
      >
        <label
          className="aj-hidden"
          htmlFor={`search-${ID}`}
        >
          {i18n.t('Search {{searchTitle}}', { searchTitle })}
        </label>
        <input
          id={`search-${ID}`}
          onChange={({ target: { value } }) => onSearch(value)}
          onClick={eatClick}
          value={searchTerm}
          tabIndex={searchExpanded ? 0 : -1}
          aria-controls={`status-${ID}`}
          ref={searchInputRef}
        />
        <div
          className="aj-hidden"
          id={`status-${ID}`}
          role="status"
          aria-live="polite"
        >
          {i18n.t('{{searchResultCount}} results returned', { searchResultCount })}
        </div>
        <button
          type="button"
          aria-controls={`container-${ID}`}
          aria-expanded={searchExpanded}
          aria-label={searchExpanded ? i18n.t('close search filter') : i18n.t('open search filter')}
          onClick={(e) => {
            eatClick(e);
            setSearchExpanded(!searchExpanded);
          }}
        >
          <i
            className="material-icons-outlined"
            aria-hidden
          >
            {searchExpanded ? 'close' : 'search'}
          </i>
        </button>
      </div>
    );
  }

  function isCurrentPath() {
    return sortPath === currentPath;
  }

  function sortClassName() {
    if (!isCurrentPath) return '';

    return currentDirection === SortDirection.Asc ? 'is-asc' : 'is-desc';
  }

  function getTooltip() {
    if (tooltip) {
      return (
        <Tooltip>{tooltip}</Tooltip>
      );
    }

    return null;
  }

  function arrowClassName(direction: SortDirection) {
    if (!isCurrentPath()) return '';
    if (direction === currentDirection) {
      return 'sort-direction';
    }

    return '';
  }

  function invertSort() {
    return currentDirection === SortDirection.Asc
      ? SortDirection.Desc
      : SortDirection.Asc;
  }

  const sortClick = (e: any) => {
    if (!initializing) {
      const { announceAssertive: announce } = props;
      e.stopPropagation();

      const sortDirection = isCurrentPath() ? invertSort() : SortDirection.Asc;
      announce(
        i18n.t('Sorting by {{name}}, {{direction}}', {
          name: ariaName,
          direction: sortDirection === SortDirection.Asc ? 'ascending' : 'descending',
        }),
      );
      onSort(sortDirection, sortPath);
    }
  };

  return (
    <th
      className={`header-${sortPath}`}
      rowSpan={rowSpan}
    >
      <div
        className={`aj-flex-cell ${sortClassName()}`}
      >
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <div onClick={sortClick}>
          <span>{children}</span>
          {getTooltip()}
          <button
            onClick={sortClick}
            className="aj-btn--sort"
            aria-label={`Sort by ${ariaName}`}
          >
            <i
              className={`material-icons-outlined ${arrowClassName(SortDirection.Asc)}`}
              aria-hidden="true"
            >
              arrow_drop_up
            </i>
            <i
              className={`material-icons-outlined ${arrowClassName(SortDirection.Desc)}`}
              aria-hidden="true"
            >
              arrow_drop_down
            </i>
          </button>
        </div>
        {search()}
      </div>
    </th>
  );
}


export default withLiveMessenger(SortableHeader);
