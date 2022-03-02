// import { BrowserRouter as Router, Route} from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';


function SidebarLeft(){
    const history = useHistory();

    return (
        <>
          <Navigation
              // you can use your own router's api to get pathname
              activeItemId="/"
              onSelect={({itemId}) => {
                // maybe push to the route
                history.push(itemId)
              }}
              items={[
                {
                  title: 'Dashboard',
                  itemId: '/',
                  // you can use your own custom Icon component as well
                  // icon is optional
                  elemBefore: () => <i class="fa fa-home" aria-hidden="true"></i>,
                },
                {
                  title: 'Management',
                //   itemId: '/management',
                //   elemBefore: () => <Icon name="users" />,
                  subNav: [
                    {
                      title: 'Projects',
                      itemId: '/management/projects',
                    },
                    {
                      title: 'Members',
                      itemId: '/management/members',
                    },
                  ],
                },
                {
                  title: 'Another Item',
                //   itemId: '/another',
                  subNav: [
                    {
                      title: 'Teams',
                      itemId: '/management/teams',
                    },
                  ],
                },                
                {
                    title: 'Dropzone',
                    itemId: '/dropzone',
                    // you can use your own custom Icon component as well
                    // icon is optional
                    elemBefore: () => <i class="fas fa-upload"></i>,
                  },
                  {
                    title: 'Data Table',
                    itemId: '/datatable',
                    // you can use your own custom Icon component as well
                    // icon is optional
                    elemBefore: () => <i className="fas fa-table"></i>,
                  },
                  {
                    title: 'Users',
                    itemId: '/table',
                    // you can use your own custom Icon component as well
                    // icon is optional
                    elemBefore: () => <i className="fas fa-user"></i> ,
                  },
              ]}
            />
        </>
      );
}
export default SidebarLeft