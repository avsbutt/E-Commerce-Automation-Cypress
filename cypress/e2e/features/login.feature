Feature: User Login

    As a user, I want to log in to the application so that I can access my dashboard.

    Scenario: User enters valid credentials
    Given i am on login page
    When i enter valid credentials
    Then i should see the dashboard            
    