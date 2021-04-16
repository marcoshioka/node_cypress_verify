# language: en
# encoding: utf-8

@all
@cep
Feature: Cep

    In order to know an address
    As a brazilian citizen
    Put a CEP number in cep's route

    @cep_200
    Scenario Outline: Search valid CEP '<cep>' - Status code 200
        Given I want to send a request to know a CEP information
        When I make a request with CEP's number '<cep>'
        Then the API will return a response with status code '200'
        And public place name '<public_place>'
        And neighborhood '<neighborhood>'
        And city name '<city>'
        And state '<state>'

        Examples:
            | cep      | public_place        | neighborhood     | city           | state |
            | 01001001 | Praça da Sé         | Sé               | São Paulo      | SP    |
            | 21030000 | Avenida Brasil      | Ramos            | Rio de Janeiro | RJ    |
            | 01310100 | Avenida Paulista    | Bela Vista       | São Paulo      | SP    |
            | 72410140 | Praça 1 Bloco A     | Setor Sul (Gama) | Brasília       | DF    |
            | 40026280 | Largo do Pelourinho | Pelourinho       | Salvador       | BA    |

    @cep_404_invalid_cep
    Scenario Outline: Invalid CEP '<cep>' - Status code 404
        Given I want to send a request to know a CEP information
        When I make a request with CEP's number '<cep>'
        Then the API will return a response with status code '404'

        Examples:
            | cep      |
            | 00000000 |
            | 99999999 |
            | 12345678 |
            | 11111111 |
            | XXXXXXXX |
            | testtest |

    @cep_404_wrong_endpoint
    Scenario Outline: Wrong endpoint '<wrong_endpoint>' - Status code 404
        Given I want to send a request to know a CEP information
        When I make a request to a wrong endpoint '<wrong_endpoint>' with valid cep '<valid_cep>'
        Then the API will return a response with status code '404'

        Examples:
            | wrong_endpoint | valid_cep |
            | cop            | 01001001  |
            | test           | 21030000  |
            | 12345678       | 01310100  |
            | 11111111       | 72410140  |
            | XXXXXXXX       | 40026280  |

    @cep_405_wrong_method
    Scenario Outline: Wrong method '<wrong_method>' - Status code 405
        Given I want to send a request to know a CEP information
        When I make a request with wrong method '<wrong_method>' with valid cep '<valid_cep>'
        Then the API will return a response with status code '405'

        Examples:
            | wrong_method | valid_cep |
            | POST         | 01001001  |
            | PUT          | 21030000  |
            | DELETE       | 01310100  |
            | PATCH        | 72410140  |
