// react imports
import React from 'react';
import { Link } from "react-router-dom";

// import styles
import "./single.css";

// single post component
export default function Single() {
	return (
		<div className="single__post">
			<div className="single__post__wrapper">
				<img
					className="single__post__img"
					src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					alt=""
				/>
				<h1 className="single__post__title">
					Lorem ipsum dolor
					<div className="single__post__edit">
						<i className="single__post__icon far fa-edit"></i>
						<i className="single__post__icon far fa-trash-alt"></i>
					</div>
				</h1>
				<div className="single__post__info">
					<span>
						Author:
						<b className="single__post__author">
							<Link className="link" to="/posts?username=Safak">
								Safak
							</Link>
						</b>
					</span>
					<span>1 day ago</span>
				</div>
				<p className="single__post__desc">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
					quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
					Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
					eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
					error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
					impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
					odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
					elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
					iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
					a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
					elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
					iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
					a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
					elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
					iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
					a odit modi eos!
					<br />
					<br />
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
					quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
					Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
					eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
					error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
					impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
					odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
					elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
					iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
					a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
				</p>
			</div>
		</div>
	);
}
