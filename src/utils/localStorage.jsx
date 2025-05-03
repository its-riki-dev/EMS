const employees = [
    {
        "id": 1,
        "name": "Aarav Sharma",
        "email": "a@a.com",
        "password": "123",
        "taskCount": {
            "active": 1,
            "completed": 2,
            "failed": 1,
            "newTask": 3
        },
        "tasks": [
            {
                "title": "Design Landing Page",
                "description": "Create the initial draft for the landing page UI.",
                "date": "2025-05-01",
                "category": "Design",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Fix CSS Bugs",
                "description": "Resolve layout issues on mobile view.",
                "date": "2025-04-29",
                "category": "Frontend",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Write Test Cases",
                "description": "Write unit tests for new components.",
                "date": "2025-04-28",
                "category": "Testing",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 2,
        "name": "Neha Verma",
        "email": "b@b.com",
        "password": "123",
        "taskCount": {
            "active": 2,
            "completed": 2,
            "failed": 0,
            "newTask": 2
        },
        "tasks": [
            {
                "title": "Database Schema Update",
                "description": "Add new fields to the employee table.",
                "date": "2025-04-25",
                "category": "Backend",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "API Integration",
                "description": "Integrate payment gateway API.",
                "date": "2025-04-30",
                "category": "Backend",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Refactor Auth Module",
                "description": "Improve login logic for better performance.",
                "date": "2025-05-01",
                "category": "Backend",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Code Review",
                "description": "Review code submitted by interns.",
                "date": "2025-04-27",
                "category": "Management",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "name": "Rohan Desai",
        "email": "c@c.com",
        "password": "123",
        "taskCount": {
            "active": 1,
            "completed": 2,
            "failed": 1,
            "newTask": 1
        },
        "tasks": [
            {
                "title": "Update Docs",
                "description": "Update API documentation for version 2.0.",
                "date": "2025-04-26",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Setup CI/CD",
                "description": "Configure CI/CD pipeline using GitHub Actions.",
                "date": "2025-04-30",
                "category": "DevOps",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Server Maintenance",
                "description": "Clean and update the staging server.",
                "date": "2025-04-28",
                "category": "IT Support",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "title": "Environment Setup",
                "description": "Setup local environment for new joiners.",
                "date": "2025-04-25",
                "category": "Support",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "name": "Meera Iyer",
        "email": "d@d.com",
        "password": "123",
        "taskCount": {
            "active": 2,
            "completed": 1,
            "failed": 0,
            "newTask": 2
        },
        "tasks": [
            {
                "title": "Logo Redesign",
                "description": "Work on a modern version of the logo.",
                "date": "2025-05-01",
                "category": "Design",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Product Demo",
                "description": "Create a short demo for client presentation.",
                "date": "2025-04-29",
                "category": "Marketing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Create Social Media Banners",
                "description": "Design banners for the upcoming launch.",
                "date": "2025-04-28",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "name": "Kabir Singh",
        "email": "e@e.com",
        "password": "123",
        "taskCount": {
            "active": 2,
            "completed": 2,
            "failed": 1,
            "newTask": 2
        },
        "tasks": [
            {
                "title": "User Feedback Analysis",
                "description": "Compile and report user feedback from beta users.",
                "date": "2025-04-27",
                "category": "Analytics",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Implement Dark Mode",
                "description": "Add theme toggle functionality to dashboard.",
                "date": "2025-05-01",
                "category": "Frontend",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Resolve Login Bug",
                "description": "Fix issue with session timeout.",
                "date": "2025-04-29",
                "category": "Backend",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "title": "Onboarding Checklist",
                "description": "Create onboarding steps for new users.",
                "date": "2025-04-28",
                "category": "Support",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Optimize Images",
                "description": "Compress and optimize images for performance.",
                "date": "2025-04-30",
                "category": "Performance",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    }
]




const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
]



export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  }
  
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
  
    return { employees, admin }
  }
  