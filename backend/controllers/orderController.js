import Order from "../models/Order.js"


export const addOrder=async(req,res)=>{
    const newOrder=new Order({
        orderItems:req.body.orderItems.map((item)=>(
            {...item,product:item._id}
        )),shippingAddress:req.body.shippingAddress,
        paymentMethod:req.body.paymentMethod,
        itemsPrice:req.body.itemsPrice,
        shippingPrice:req.body.shippingPrice,
        taxPrice:req.body.taxPrice,
        totalPrice:req.body.totalPrice,
        user:req.user._id
    })
    const order=await newOrder.save();
    res.status(201).send({message:"order added successfully",order})
}
export const getOrderById=async(req,res)=>{
    const{id}=req.params;
    const order=await Order.findById(id);
    if(order){
        res.status(201).send({message:"order found",order})
    }else{
        res.status(404).send({message:"order not found"})
    }
}