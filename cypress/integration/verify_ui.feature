# language: en
# encoding: utf-8   

@verify_ui
Feature: VerifyMyAge

As a costumer
Would like to access Verify website
To see all products and services

# @verify_about
# Scenario: Verify About
# Given I access VerifyMyAge's website
# When I select 'About'
# Then I must see text about VerifyMyAge
# And the Management Team

# @verify_how_it_works
# Scenario: Verify How It Works
# Given I access VerifyMyAge's website
# When I select 'How It Works'
# Then I must see How VerifyMyAge Works
# And Verification Methods    

@verify_pricing
Scenario: Verify Pricing
Given I access VerifyMyAge's website
When I select 'Pricing'
Then I must see pricing details
And each integration per type


# @verify_security
# Scenario: Verify Security
# Given I access VerifyMyAge's website
# When I select 'Security' 

# @verify_contact
# Scenario: Verify Contact
# Given I access VerifyMyAge's website
# When I select 'Contact' 