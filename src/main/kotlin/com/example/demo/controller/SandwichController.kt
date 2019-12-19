package com.example.demo.controller

import com.example.demo.Sandwich
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping

@Controller
@RequestMapping("/api/sandwich")
class SandwichController {

    @PostMapping
    fun createNewSandwich(@RequestBody sandwich: Sandwich): ResponseEntity<Sandwich> {
        val newSandwich = Sandwich(sandwich.type, sandwich.breadType, sandwich.ingredients)
        return ResponseEntity.ok(newSandwich);
    }
}
