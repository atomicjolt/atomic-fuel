import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider } from '@apollo/react-testing';
import SurveyItem from '.';


describe('SurveyItem component', () => {
  defaultSettings({
    canvas_url: 'url',
    canvas_course_id: 1234,
  });

  it('Should match default snapshot', () => {
    const { asFragment } = render(
      <MockedProvider>
        <SurveyItem
          surveyAssignment={{
            id: '11',
            anonymousGrading: false,
            lmsAssignmentId: '1234',
            name: 'name',
            createdAt: '2020/12/12',
            dueAt: '2020/12/12',
            published: false,
            scoreMaximum: 10,
            completed: 15,
            responses: [],
            survey: {
              id: 'string',
              qSurveyId: 'id',
              createdAt: '2020/12/12',
              published: false,
              canAccess: true,
              owns: true,
            },
          }}
          onDelete={() => {}}
        />
      </MockedProvider>,
      { wrapper: MemoryRouter },
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
