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
                  id: 1,
                  title: 'Dashboard',
                  itemId: '/',
                  // you can use your own custom Icon component as well
                  // icon is optional
                  elemBefore: () => <i class="fa fa-home" aria-hidden="true"></i>,
                },
                {
                  id: 2,
                  title: 'Management',
                //   itemId: '/management',
                  elemBefore: () => <i class="fas fa-tasks"></i>,
                  subNav: [
                    {
                      id: 1,
                      title: 'Projects',
                      itemId: '/management/projects',
                    },
                    {
                      id: 2,
                      title: 'Members',
                      itemId: '/management/members',
                    },
                  ],
                },
                {
                  id: 3,
                  title: 'Crud',
                   elemBefore: () =><i class="fa-solid fa-user-plus"></i>,
                  subNav: [
                    {
                      id:1,
                      title: 'Create',
                      itemId: '/create',
                    },
                    {
                      id:1,
                      title: 'Read',
                      itemId: '/read',
                    },
                    {
                      id:1,
                      title: 'Update',
                      itemId: '/update',
                    },
                    {
                      id:1,
                      title: 'Delete',
                      itemId: '/delete',
                    },
                  ],
                },                
                {
                  id: 4,
                    title: 'Dropzone',
                    itemId: '/dropzone',
                    // you can use your own custom Icon component as well
                    // icon is optional
                    elemBefore: () => <i class="fas fa-upload"></i>,
                  },
                  {
                    id: 5,
                    title: 'Data Table',
                    itemId: '/datatable',
                    // you can use your own custom Icon component as well
                    // icon is optional
                    elemBefore: () => <i className="fas fa-table"></i>,
                  },
                  {
                    id: 6,
                    title: 'Users',
                    itemId: '/table',
                    // you can use your own custom Icon component as well
                    // icon is optional
                    elemBefore: () => <i className="fas fa-users"></i> ,
                  },
                  {
                    id: 7,
                    title: 'New User',
                    itemId: '/createuser',
                    // you can use your own custom Icon component as well
                    // icon is optional
                    elemBefore: () => <i className="fas fa-users"></i> ,
                  },

                  {
                    id: 8,
                    title: 'Bootstrap Carousel',
                    itemId: '/carousel',
                    // you can use your own custom Icon component as well
                    // icon is optional
                    elemBefore: () => <i className="fas fa-users"></i> ,
                  },
              ]}
            />
        </>
      );
}
export default SidebarLeft