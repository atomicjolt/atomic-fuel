import React from 'react';
import { Link } from 'react-router-dom';
import i18n from 'i18next';
import Tippy from '@tippyjs/react';
import { withSettings } from 'atomic-fuel';

import QualtricsLink from '../common/qualtrinks_link';
import Menu from '../Menu';
import Button, { ButtonType } from '../Button';
import Publish from '../Publish';
import { SurveyAssignment, Settings } from '../../types';

import './styles.scss';

interface Props {
  readonly surveyAssignment: SurveyAssignment,
  readonly onDelete: (survey: SurveyAssignment) => void,
  readonly settings: Settings,
}

function SurveyItem({ surveyAssignment, onDelete, settings }: Props) {
  const createdAt = new Date(surveyAssignment.createdAt).toLocaleDateString();
  const dueDate = surveyAssignment.dueAt
    ? new Date(surveyAssignment.dueAt).toLocaleDateString()
    : '-';
  const { canvas_url: canvasUrl, canvas_course_id: canvasCourseId } = settings;
  const assignmentUrl = `${canvasUrl}/courses/${canvasCourseId}/assignments/${surveyAssignment.lmsAssignmentId}`;

  return (
    <tr className="assignment-item">
      <td className="assignment-item__name">
        <a href={assignmentUrl} target="_top">
          {surveyAssignment.name}
        </a>
      </td>
      <td className="assignment-item__due">{dueDate}</td>
      <td className="assignment-item__date">{createdAt}</td>
      <td className="assignment-item__completed">{surveyAssignment.completed}</td>
      <td className="assignment-item__actions">
        <QualtricsLink
          to="results"
          id={surveyAssignment.survey.qSurveyId}
          canAccess={surveyAssignment.survey.canAccess}
        >
          Results
        </QualtricsLink>
        { surveyAssignment.survey.owns ?
          <Publish
            published={surveyAssignment.published}
            surveyId={surveyAssignment.id}
          /> :
          <Tippy
            animation="shift-away-subtle"
            content="Cannot Publish a Shared Survey."
            duration={0}
            placement="bottom"
          >
            <i className="material-icons-outlined locked">lock</i>
          </Tippy>}
        <Menu renderChildren={(
          activeClass,
          _,
          menuOpen,
          menuRef,
          onKeyPress,
          toggleMenu,
        ) => {
          const ariaOptions = {
            'aria-label': i18n.t('assignment options'),
            'aria-haspopup': 'menu',
            'aria-expanded': menuOpen ? 'true' : 'false',
          };

          return (
            <div ref={menuRef} className={`aj-menu-container ${activeClass}`}>
              <Tippy
                animation="shift-away-subtle"
                content="Survey Options"
                duration={0}
                placement="bottom"
              >
                <Button
                  ariaOptions={ariaOptions}
                  color="gray"
                  buttonType={ButtonType.icon}
                  onClick={toggleMenu}
                >
                  <i className="material-icons-outlined" arria-hidden="true">more_vert</i>
                </Button>
              </Tippy>
              <ul
                className="aj-menu"
                role="menu"
                onClick={(e) => e.stopPropagation()}
                onKeyPress={onKeyPress}
              >
                <li>
                  <QualtricsLink
                    to="edit"
                    id={surveyAssignment.survey.qSurveyId}
                    canAccess={surveyAssignment.survey.canAccess}
                  >
                    <i className="material-icons-outlined">mode_edit</i>
                    Edit Content
                  </QualtricsLink>
                </li>
                <li>
                  <Link to={`/${surveyAssignment.id}/settings`}>
                    <i className="material-icons-outlined">settings</i>
                    Settings
                  </Link>
                </li>
                <li>
                  <button onClick={() => onDelete(surveyAssignment)}>
                    <i className="material-icons-outlined">delete</i>
                    Delete Survey
                  </button>
                </li>
              </ul>
            </div>
          );
        }}
        />
      </td>
    </tr>
  );
}

export default withSettings(SurveyItem);
