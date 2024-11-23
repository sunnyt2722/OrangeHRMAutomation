Feature: Login Validation
    Background: I navigate to OrangeHRM landing page details
    When I navigate to OrangeHRM landing page
    
    Scenario: Validate labels for the orange HRM test
    Given I navigate to OrangeHRM homepage
    When I am on landing page
    Then I verify Username label is visible
    And I verify Username input field is visible
    And I verify Password label is visible
    And I verify Password input field is visible
    And I verify Login Button is visible
    And I verify Forgot password link is visible