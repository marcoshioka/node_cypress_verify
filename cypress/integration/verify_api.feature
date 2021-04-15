# language: en
# encoding: utf-8

@verify_search_api
Feature: VerifyMyAge Search API
As an API consumer
Would like to get search results in VerifyMyAge docs
To see all articles related

@search_results
Scenario Outline: Search Results 200 - '<condition>'
Given VerifyMyAGe doc rote with search '<query>' 
When I realize a POST in '<condition>'
# Then API returns status code '200' 
# And a response with '<message>'

Examples:
|query      | condition        | message      | 
|      teste| cenário positivo | historicList  | 
|udhsuoaidiosajdiojasiosdjaio| cenário negativo | Invalid token | 
|      HMAC | cenário positivo | historicList  | 

